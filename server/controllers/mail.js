const nodemailer = require("nodemailer");
require("dotenv").config();
const myEmail = process.env.myEmail;
const myPass = process.env.myPass;

  const sendmail = async (req, res) => {
   
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: myEmail,
        pass: myPass,
      },
    });

    const options = {
      from: myEmail,
      to: req.user.email,
      subject: "Pet found!",
      text: "Hello, we would like to inform you that we found your pet. Please make sure to contact us and come pick up your pet",
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return res.send({ message: "An error has occurred" });
      }
      return res.send({ message: "Email sent successfully" });
    });
  ;
}

module.exports = sendmail;