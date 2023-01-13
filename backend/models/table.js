const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransSchema = new Schema({
  date: { type: String, required: true },
  open: { type: Number, required: true },
  high: { type: Number, required: true },
  low: { type: Number, required: true },
  close: { type: Number, required: true },
  adjclose: { type: Number, required: true },
  volume: { type: Number, required: true },
});

module.exports = mongoose.model("Table-Model", TransSchema);
