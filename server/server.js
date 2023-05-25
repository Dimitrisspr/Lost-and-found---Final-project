const express = require("express");
const app = express();
const freeRoutes = require("./routes/freeRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const verifyToken = require("./authorize");
require("./connection");
const cors = require("cors");
const port = 8000;
app.use(express.json());
app.use(cors());
app.use("/", freeRoutes);
app.use("/auth", verifyToken, protectedRoutes);
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 50000,
  })
);

require("./controllers/lostPetController")
const nodemailer = require("nodemailer");
require("dotenv").config();
const myEmail = process.env.myEmail;
const myPass = process.env.myPass;


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
      to: ,
      subject: "Pet found!",
      text: "Hello, we would like to inform you that we found your pet. Please make sure to contact us and come pick up your pet",
    };
    console.log(lostModel);

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return reject({ message: "An error has occurred" });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.get("/", (req, res) => {
  sendmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/send_email", (req, res) => {
  sendmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`our server listens on port ${port}`);
});
