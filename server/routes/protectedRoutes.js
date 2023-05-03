const express = require("express");
const router = express.Router();
const foundModel = require("../controllers/foundPetController")

router.post("/foundpet", foundModel)

module.exports = router;