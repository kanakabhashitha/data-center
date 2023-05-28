import nodemailer from "nodemailer";
import { EmailTemplate } from "./EmailTemplate.js";

const mailTransport = async (email, temperature, humidity, type) => {
  // create reusable transporter object using the default SMTP transport

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILTRAP_USER_NAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

  await transporter
    .sendMail({
      from: process.env.MAILTRAP_USER_NAME,
      to: email,
      subject: "Data Center Alert",
      html: EmailTemplate(temperature, humidity, type),
    })
    .then((done) => {
      console.log(done);
    });
};

export { mailTransport };
