const express = require("express");
const router = express.Router();
const foundModel = require("../controllers/foundPetController");
const lostModel = require("../controllers/lostPetController");
const authorize = require('../authorize')

router.post("/foundpet",authorize, foundModel)
router.post("/lostpet",authorize, lostModel);

module.exports = router;