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

function datetoString(dates) {
  var month1 = dates.getUTCMonth() + 1;
  var day1 = dates.getUTCDate();
  var year1 = dates.getUTCFullYear();
  if (month1 < 10) {
    month1 = "0" + month1;
  }
  if (day1 < 10) {
    day1 = "0" + day1;
  }
  var newdate1 = year1 + "-" + month1 + "-" + day1;

  return newdate1;
}
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
const datesort = async (req, res) => {
  console.log(req.body);
  const value = req.body.values;
  const comp = req.body.comp;
  const comparr = await map.get(comp).find({});
  // console.log();
  // value[0] = Date.parse(value[0]);
  // value[1] = Date.parse(value[1]);
  if (value != null) {
    var valz = new Date(value[0]);
    var valo = new Date(value[1]);
    console.log(valz);
    console.log(typeof valz);
    var month1 = valz.getUTCMonth() + 1;
    var day1 = valz.getUTCDate();
    var year1 = valz.getUTCFullYear();
    var month2 = valo.getUTCMonth() + 1; //months from 1-12
    var day2 = valo.getUTCDate();
    var year2 = valo.getUTCFullYear();
    if (month1 < 10) {
      month1 = "0" + month1;
    }
    if (day1 < 10) {
      day1 = "0" + day1;
    }
    if (month2 < 10) {
      month2 = "0" + month2;
    }
    if (day2 < 10) {
      day2 = "0" + day2;
    }
    var newdate1 = year1 + "-" + month1 + "-" + day1;
    var newdate2 = year2 + "-" + month2 + "-" + day2;
    console.log(newdate1 + " " + newdate2);
    let filtered_array = comparr.filter((el) => {
      // console.log(el.date);
      return el.date >= newdate1 && el.date <= newdate2;
    });

    // console.log(filtered_array.length);
    res.json(filtered_array);
  }
  // res.json({ message: "no value" });
};

const returns = async (req, res) => {
  console.log(req.body);
  const time = req.body.time;
  const comp = req.body.comp;

  console.log(comp);
  let currentDate = new Date("2023-01-12");
  let ogDate = new Date("2023-01-12");
  console.log("The current Date=" + currentDate);
  let date;
  if (time === "YTD") {
    date = new Date("2023-01-03");
    console.log("hhj");
  } else if (time === "1 Week") {
    date = new Date(currentDate.setDate(currentDate.getDate() - 7));
  } else if (time === "1 Month") {
    date = new Date(currentDate.setDate(currentDate.getDate() - 30));
  } else if (time === "3 Months") {
    date = new Date(currentDate.setDate(currentDate.getDate() - 90));
  } else if (time === "6 Months") {
    date = new Date(currentDate.setDate(currentDate.getDate() - 181));
  } else if (time === "1 Year") {
    date = new Date(currentDate.setDate(currentDate.getDate() - 365));
  } else if (time === "2 Year") {
    date = new Date(currentDate.setDate(currentDate.getDate() - 730));
  } else if (time === "3 Year") {
    date = new Date(currentDate.setDate(currentDate.getDate() - 1004));
  } else if (time === "5 Year") {
    date = new Date(currentDate.setDate(currentDate.getDate() - 1823));
  }

  console.log(date);
  const filtered = datetoString(date);
  const oldDate = datetoString(ogDate);
  console.log(filtered, " ", oldDate);

  const nse = await map.get(comp).find({ date: filtered });
  const curr = await map.get(comp).find({ date: oldDate });

  const ret = (curr[0].close - nse[0].close) / curr[0].close;

  console.log(ret);
  res.json({ returns: ret });
};

exports.datesort = datesort;
exports.returns = returns;
exports.search = search;
exports.marketindex = marketIndex;
