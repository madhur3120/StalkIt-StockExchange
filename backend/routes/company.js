const express = require("express");
// const { check } = require('express-validator');
const router = express.Router();

const companies = require("../controllers/companies");

router.get("/search", companies.search);
router.get("/index", companies.marketindex);

module.exports = router;
