//const user = require("./controllers/lostPetController")
const nodemailer = require("nodemailer");
require("dotenv").config();
const myEmail = process.env.myEmail;
const myPass = process.env.myPass;
const express = require("express");
const app = express();

function sendmail() {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: myEmail,
        pass: myPass,
      },
    });

    const options = {
      from: myEmail,
      to: "dima.tripola@gmail.com",
      //to: req.user.email,
      subject: "Pet found!",
      text: "Hello, we would like to inform you that we found your pet. Please make sure to contact us and come pick up your pet",
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return reject({ message: "An error has occurred" });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

module.exports = sendmail;

// app.get("/", (req, res) => {
//   sendmail()
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });

// app.post("/send_email", (req, res) => {
//   sendmail(req.body)
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });
