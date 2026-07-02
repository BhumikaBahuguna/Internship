const mongoose = require("mongoose");

const getHealth = (req, res) => {
  const dbStates = ["disconnected", "connected", "connecting", "disconnecting"];
  const isEmailConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

  res.status(200).json({
    success: true,
    message: "Backend is running",
    environment: process.env.NODE_ENV || "development",
    mongodb: dbStates[mongoose.connection.readyState] || "unknown",
    emailService: isEmailConfigured ? "configured" : "not_configured",
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHealth
};
