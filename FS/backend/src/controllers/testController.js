const mongoose = require("mongoose");
const cloudinary = require("../config/cloudinary");

const getTestMessage = (req, res) => {
  const cloudinaryConfig = cloudinary.config();

  res.status(200).json({
    success: true,
    message: "Frontend connected to backend successfully",
    mongodbConnected: mongoose.connection.readyState === 1,
    cloudinaryConfigured: Boolean(cloudinaryConfig.cloud_name)
  });
};

module.exports = {
  getTestMessage
};
