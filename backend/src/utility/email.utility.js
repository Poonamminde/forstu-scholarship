const nodemailer = require("nodemailer");

const sendEmail = async (email) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "wilbert.homenick34@ethereal.email",
      pass: "VqeEBuRHkxps6K2PBF",
    },
  });

  // Define the email options
  const mailOptions = {
    from: "Forstu Scholarship Program",
    to: email,
    subject: "Scholarship Details Sumission",
    text: "Hello, please fill the form",
  };

  // Send the email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", email, error);
    } else {
      console.log("Email sent:", email, info.response);
    }
  });
};

module.exports = { sendEmail };
