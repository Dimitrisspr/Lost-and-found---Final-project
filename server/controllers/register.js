const bcrypt = require("bcrypt");
const User = require("../schemas/userSchema");
const SALT_ROUNDS = +process.env.SALT;
require("dotenv").config();

const registeredUser = (req, res) => {
  try {
    bcrypt.hash(req.body.password, SALT_ROUNDS).then((hashedPass) => {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
        // ownersid: req.body.ownersid,
        ownersFCMID: req.body.ownersFCMID
      });
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

// "cgJhLN157NmmVw56dCx91y:APA91bHGuh_JzlNpvxspXsaYd462yobGbnejQI672SYyAQgv7hCPdP_VOSUY7IfJYDqiNRfnyQxZiLtNpjU6_9aV7hpgmr2DEVcIHGwmchUNyJf3ZIXW004Hgq3jeop7YGumW9g-z6QV"
// "cgJhLN157NmmVw56dCx91y:APA91bHGuh_JzlNpvxspXsaYd462yobGbnejQI672SYyAQgv7hCPdP_VOSUY7IfJYDqiNRfnyQxZiLtNpjU6_9aV7hpgmr2DEVcIHGwmchUNyJf3ZIXW004Hgq3jeop7YGumW9g-z6QV"