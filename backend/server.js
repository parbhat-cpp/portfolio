const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 487,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: name,
      address: email,
    },
    to: process.env.USER,
    subject: `PORTFOLIO MAIL`,
    text: `Email: ${email}\nName: ${name}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "email sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
