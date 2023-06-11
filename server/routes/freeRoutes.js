const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/register");
const loggedInUser = require("../controllers/login");
//const getAdopted = require("../controllers/adopt");
//const adoptPet = require("../controllers/adopt");


//router.get("/adopted", getAdopted);
//router.post("/adopt", adoptPet);
router.post("/login", loggedInUser);
router.post("/register", registerUser);


module.exports = router;
