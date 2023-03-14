const  nodemailer = require("nodemailer");
/* import nodemailer from "nodemailer"; */

require("dotenv").config();
const { GOOGLE_MAIL_AUTH, GOOGLE_ACCOUNT } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: GOOGLE_ACCOUNT, // generated ethereal user
    pass: GOOGLE_MAIL_AUTH, // generated ethereal password
  },
});

const send_mail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: '"Message sent successfully" <CamiloSarmientoPortfolio@gmail.com>',
      to: email,
      subject: subject,
      html: html,
    });
  } catch (err) {
    console.err(new Error(err).message);
  }
};


module.exports = { send_mail };

