const express = require("express");
const router = express.Router();
const foundModel = require("../controllers/foundPetController");
const lostModel = require("../controllers/lostPetController")

router.post("/foundpet", foundModel)
router.post("/lostpet", lostModel);

module.exports = router;