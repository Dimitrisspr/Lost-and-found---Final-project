require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET;

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.status(401).send({ msg: "unauthorized " });
    }
    const token = await req.headers.authorization.split(" ")[1];
    console.log(token);
    if (!token) {
     res.status(401).send({ msg: "Invalid token" });
    }
    let validatedToken = jwt.verify(token, SECRET_KEY);
    if (!validatedToken) {
      res.send({ message: "Can't verify token..." });
    }
    req.user = validatedToken;
    next();
  } catch (error) {

    res.status(500).send({ msg: "server problem" });
    console.log(error);
  }
};

module.exports = verifyToken;
