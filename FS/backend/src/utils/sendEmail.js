const createTransporter = require("../config/smtp");

const sendEmail = async ({ to, subject, html, text }) => {
  const transporter = createTransporter();

  if (!transporter) {
    const error = new Error("Email service is not configured");
    error.statusCode = 503;
    throw error;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
      html
    });
  } catch (error) {
    console.error("Failed to send email:", error.message);
    const customError = new Error("Failed to send email");
    customError.statusCode = 500;
    throw customError;
  }
};

module.exports = sendEmail;
