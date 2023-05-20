const express = require("express");
const router = express.Router();
const {foundPet, getFoundPets} = require("../controllers/foundPetController");
const {lostPet, getLostPets} = require("../controllers/lostPetController");
const authorize = require('../authorize')


router.post("/foundpet",authorize, foundPet);
router.post("/lostpet",authorize, lostPet);
router.get("/getLostPets", authorize, getLostPets);
router.get("/getFoundPets", authorize, getFoundPets)

module.exports = router;