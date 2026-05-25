import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import protectAdmin from "../middleware/authMiddleware.js";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // GENERATE JWT TOKEN
    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      token,
      admin: {
        email: admin.email,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

router.get(
  "/dashboard",
  protectAdmin,
  async (req, res) => {

    res.status(200).json({
      success: true,
      message: "Welcome Admin Dashboard",
      adminId: req.adminId,
    });
  }
);

export default router;