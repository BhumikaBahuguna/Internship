require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");
const cloudinary = require("./src/config/cloudinary");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    const cloudinaryConfig = cloudinary.config();
    if (cloudinaryConfig.cloud_name) {
      console.log("Cloudinary configured successfully");
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
