var express = require("express");
var router = express.Router();

// slash gördüğün zaman function çalışır
module.exports.index = function (req, res, next) {
  res.render("index", { title: "Express" });
};
