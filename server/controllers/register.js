const bcrypt = require("bcrypt");
const User = require("../schemas/userSchema");
const SALT_ROUNDS = process.env.SALT;
require("dotenv").config();

const registeredUser = (req, res) => {
  try {
    bcrypt.hash(req.body.password, SALT_ROUNDS).then((hashedPass) => {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });
      console.log(hashedPass);
      user
        .save()
        .then((result) => {
          res.status(201).send({
            msg: "user registered successfully",
            result,
          });
        })
        .catch((error) => {
          res.status(400).send({
            msg: "user didn't registered",
            error,
          });
        });
    });
  } catch (error) {
    res.status(500).send({
      msg: "internal server error",
      error,
    });
  }
};

module.exports = registeredUser;
