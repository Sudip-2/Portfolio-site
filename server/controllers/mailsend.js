const nodemailer = require("nodemailer");

async function handleSendMail(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  (async () => {
    try {
      await transporter.sendMail({
        from: `"My Portfolio" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: req.body.subject,
        text: `${req.body.from}, ${req.body.email}: \n${req.body.text}`,
      });
      res.status(200).json({
        success: true,
        message: "Message sent",
      });
      console.log("Successful");
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Error Sending Message",
      });
      console.error("Error while sending mail", err);
    }
  })();
}

module.exports = {
  handleSendMail,
};
