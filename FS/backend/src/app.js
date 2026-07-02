const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes");
const testRoutes = require("./routes/testRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/test", testRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
