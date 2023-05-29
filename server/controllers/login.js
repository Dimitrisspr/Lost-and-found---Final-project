const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../schemas/userSchema");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET;

const loggedin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Wrong email or password");
    }

    const validatedUser = await bcrypt.compare(password, user.password);
    if (!validatedUser) {
     return res.status(400).send("wrong password");
    } 
      const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY);
      //console.log(token);
      res.status(200).send(token)
    
  } catch (error) {
    res.status(500).send({ msg: "error", error });
    console.log(error);
  }
};


module.exports = loggedin;
