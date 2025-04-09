const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

// POST /api/contact
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ success: false, error: "All fields are required" });

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use "smtp.mailtrap.io" for dev/test
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content (HTML layout)
    const mailOptions = {
      from: `"${name}" <${email}>`, // The 'from' field now uses the name and email from the form
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2d8659;">📩 New Message from Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2d8659;">
            ${message}
          </div>
          <hr />
          <p style="font-size: 12px; color: gray;">Glory Bible Church | Rooted in Christ. Growing in Grace. Living with Purpose.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Server error while sending email" });
  }
});

module.exports = router;
