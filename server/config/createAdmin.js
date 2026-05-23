import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import Admin from "../models/Admin.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {

    const hashedPassword =
      await bcrypt.hash("admin123", 10);

    await Admin.create({
      email: "2024pgcsca078@nitjsr.ac.in",
      password: hashedPassword,
    });

    console.log("Admin Created");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });