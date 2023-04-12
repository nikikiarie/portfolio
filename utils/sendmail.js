const nodemailer = require("nodemailer");

module.exports = async (res,email, subject, text,) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to:process.env.USER ,
      subject: subject,
      text: text,
    });
    res.status(200).json('Email received. Looking forward to having a chat')
  } catch (err) {
    res.status(400).json('Error occured.Please contact me via email: nix.kiarie@gmail.com')
    
   
  }
};