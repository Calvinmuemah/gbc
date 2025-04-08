const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Register User
router.post("/api/register", async (req, res) => {
  const { name, email, password, phone_number } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(req.body)
    const newUser = new User({ name, email, password: hashedPassword, phone_number });

    await newUser.save();
    res.status(201).json({ message: "You Are registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Login
router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ token });
});


// Forgot Password
router.post("/api/forgot-password", async (req, res) => {
    const { email } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Generate a reset token with an expiry of 15 minutes
      const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
  
      // Store the token and expiry time in the database
      user.resetToken = resetToken;
      user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes expiry
      await user.save();
  
      // Email transporter setup
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });
  
      // Construct the reset link
      const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
  
      // Email content with user's name
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset Request",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #333;">Hi ${user.name},</h2>
            <p>We received a request to reset your password for your account at <strong>Glory Bible Church</strong>.</p>
            <p>Click the button below to reset your password:</p>
            <a href="${resetLink}" style="display: inline-block; padding: 10px 15px; font-size: 16px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
            <p>If the button doesn't work, you can also copy and paste this link into your browser:</p>
            <p><a href="${resetLink}">${resetLink}</a></p>
            <p><strong>Security Notice:</strong> If you did not request this password reset, please ignore this email or contact support.</p>
            <p>Thank you,<br>Glory Bible Church Team</p>
          </div>
        `,
      };
      
  
      // Send email
      await transporter.sendMail(mailOptions);
  
      res.json({ message: "Password reset link sent to email." });
    } catch (error) {
      console.error("Forgot Password Error:", error);
      res.status(500).json({ error: "Internal server error. Please try again." });
    }
  });
  
// reset password
router.post("/reset-password", async (req, res) => {
  const { token, password } = req.body;

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired token." });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password and remove reset token
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ message: "Password reset successful. You can now log in." });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

// Verify Reset Token
router.get("/verify-reset-token/:token", async (req, res) => {
  const { token } = req.params;

  try {
    if (!token) {
      return res.status(400).json({ error: "No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired token." });
    }

    res.json({ valid: true });
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(400).json({ error: "Invalid or expired token." });
  }
});

module.exports = router;