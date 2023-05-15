require("dotenv").config();
const jwt = require("jsonwebtoken");
const PRIVATE = process.env.SECRET;

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.status(403).send({ msg: "unauthorized " });
    }
    const token = await req.headers.authorization.split(" ") [1];
    let validatedToken = jwt.verify(token, PRIVATE);
    if(!validatedToken){
      res.status(400).send({msg: "non validated token"})
    }
    req.user = validatedToken;
    next();
  } catch (error) {
    res.status(500).send({ msg: "server problem" });
    console.log(error);
  }
};

module.exports = verifyToken;