const bcrypt = require("bcryptjs");

const User = require("../models/User");
const generateOtp = require("../utils/generateOtp");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");

const otpExpiryMinutes = () => Number(process.env.OTP_EXPIRES_IN_MINUTES) || 10;

const buildSafeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  isEmailVerified: user.isEmailVerified,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt
});

const saveOtpAndSendEmail = async (user, subject) => {
  const otp = generateOtp();
  const hashedOtp = await bcrypt.hash(otp, 10);

  user.otp = hashedOtp;
  user.otpExpiresAt = new Date(Date.now() + otpExpiryMinutes() * 60 * 1000);

  try {
    await sendEmail({
      to: user.email,
      subject,
      text: `Your OTP is ${otp}. It expires in ${otpExpiryMinutes()} minutes.`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>${subject}</h2>
          <p>Your OTP is:</p>
          <p style="font-size: 24px; font-weight: bold; letter-spacing: 4px;">${otp}</p>
          <p>This OTP expires in ${otpExpiryMinutes()} minutes.</p>
        </div>
      `
    });
    
    await user.save();
  } catch (error) {
    if (error.statusCode === 503) {
      error.message = "Email service is not configured. OTP cannot be sent.";
    }
    throw error;
  }
};

const verifyOtpForUser = async ({ email, otp }) => {
  if (!email || !otp) {
    const error = new Error("Email and OTP are required");
    error.statusCode = 400;
    throw error;
  }

  const user = await User.findOne({ email }).select("+otp +otpExpiresAt");

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  if (!user.otp || !user.otpExpiresAt) {
    const error = new Error("OTP not found. Please request a new OTP.");
    error.statusCode = 400;
    throw error;
  }

  if (user.otpExpiresAt < new Date()) {
    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    const error = new Error("OTP has expired. Please request a new OTP.");
    error.statusCode = 400;
    throw error;
  }

  const isOtpValid = await bcrypt.compare(otp, user.otp);

  if (!isOtpValid) {
    const error = new Error("Invalid OTP");
    error.statusCode = 400;
    throw error;
  }

  user.otp = undefined;
  user.otpExpiresAt = undefined;

  return user;
};

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Name, email, and password are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409);
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      isEmailVerified: false
    });

    try {
      await saveOtpAndSendEmail(user, "Verify your email");
    } catch (error) {
      if (error.statusCode) {
        res.status(error.statusCode);
      }
      throw error;
    }

    res.status(201).json({
      success: true,
      message: "Registration successful. OTP sent to your email."
    });
  } catch (error) {
    next(error);
  }
};

const verifyRegisterOtp = async (req, res, next) => {
  try {
    const user = await verifyOtpForUser(req.body);
    user.isEmailVerified = true;
    await user.save();

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      token,
      user: buildSafeUser(user)
    });
  } catch (error) {
    if (error.statusCode) {
      res.status(error.statusCode);
    }
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Email and password are required");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    try {
      await saveOtpAndSendEmail(user, "Your login OTP");
    } catch (error) {
      if (error.statusCode) {
        res.status(error.statusCode);
      }
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Login OTP sent to your email."
    });
  } catch (error) {
    next(error);
  }
};

const verifyLoginOtp = async (req, res, next) => {
  try {
    const user = await verifyOtpForUser(req.body);

    if (!user.isEmailVerified) {
      user.isEmailVerified = true;
    }

    await user.save();

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login verified successfully",
      token,
      user: buildSafeUser(user)
    });
  } catch (error) {
    if (error.statusCode) {
      res.status(error.statusCode);
    }
    next(error);
  }
};

const getProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: buildSafeUser(req.user)
  });
};

module.exports = {
  register,
  verifyRegisterOtp,
  login,
  verifyLoginOtp,
  getProfile
};
