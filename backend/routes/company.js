const express = require("express");
// const { check } = require('express-validator');
const router = express.Router();

const companies = require("../controllers/companies");

router.post("/search", companies.search);
router.post("/index", companies.marketindex);
router.post("/datesort", companies.datesort);
router.post("/returns", companies.returns);

module.exports = router;
