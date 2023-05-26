const express = require("express");
const router = express.Router();
const { foundPet, getFoundPets } = require("../controllers/foundPetController");
const { lostPet, getLostPets } = require("../controllers/lostPetController");
const authorize = require("../authorize");
const sendmail = require("../controllers/mail");


router.post("/foundpet", authorize, foundPet);
router.post("/lostpet", authorize, lostPet);
router.get("/getLostPets", authorize, getLostPets);
router.get("/getFoundPets", authorize, getFoundPets);
router.post("/send_email", authorize, sendmail);
router.get("/", authorize, sendmail);

module.exports = router;
