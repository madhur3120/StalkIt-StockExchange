const reliances = require("../models/reliances");
const bses = require("../models/bse");
const nses = require("../models/nse");
const ciplas = require("../models/cipla");
const eichermots = require("../models/eichermot");
const tatasteels = require("../models/tatasteel");
const ashokleys = require("../models/ashokley");

const map = new Map();
map.set("reliance", reliances);
map.set("cipla", ciplas);
map.set("bse", bses);
map.set("nse", nses);
map.set("eichermot", eichermots);
map.set("tatasteel", tatasteels);
map.set("ashokley", ashokleys);

const search = async (req, res) => {
  console.log(req.body);
  const arr = await map.get(req.body.company).find({});
  const filtered = await arr.filter((data) =>
    data.date.includes(req.body.date)
  );
  res.json(filtered);
};

const marketIndex = async (req, res) => {
  const mark = await map.get(req.body.index).find({});
  const filtered = await mark.filter((data) =>
    data.date.includes(req.body.date)
  );
  res.json(filtered);
};

exports.search = search;
exports.marketindex = marketIndex;
