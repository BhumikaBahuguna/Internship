const mongoose = require("mongoose");

const getHealth = (req, res) => {
  const dbStates = ["disconnected", "connected", "connecting", "disconnecting"];

  res.status(200).json({
    success: true,
    message: "Backend is healthy",
    mongodb: dbStates[mongoose.connection.readyState] || "unknown",
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHealth
};
