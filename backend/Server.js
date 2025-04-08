require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { verify } = require("crypto");
const jwt = require("jsonwebtoken");
// const fs = require("fs");
const mongoose = require("mongoose");
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const { Parser } = require("json2csv");
// Config
const connectDB = require("./Config/DB");
// Models
const User = require("./Models/User");
const Settings = require("./Models/Settings");
// Routes
const settingsRoutes = require("./Routes/Settings");
const contactRoutes = require("./Routes/Contact");
const Chat = require("./Routes/Chat");
const AuthRoutes = require("./Routes/AuthRoutes")
// Middlewares
const authMiddleware = require("./Middlewares/AuthMiddleware");

const PORT = process.env.PORT;

// Connect to DB
connectDB();

const app = express();
app.use(express.json({ limit: "5mb" })); // Allow large images

app.use(cors());
// app.options('*', cors());

app.use(cors({
  origin: "*",
  // methods: ['GET', 'POST',"PUT", "DELETE"],
}));

// Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});


// Auth Routes
// register
app.use("/", AuthRoutes);
// login
app.use("/", AuthRoutes);
// forgot password
app.use("/", AuthRoutes);
// resetLink
app.use("/", AuthRoutes);
// verify reset token
app.use("/", AuthRoutes);



// Settings Routes
// settings
app.use("/api/settings", settingsRoutes);
// save updates
app.use("/api/update", settingsRoutes);
// Contact Form Route
app.use("/api/contact", contactRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

