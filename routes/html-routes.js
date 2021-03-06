// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

const db = require("../models");
const { Op } = require("sequelize");

module.exports = function (app) {
  app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/basicFlame.html"));
    res.render("index");
  })

  app.get("/all", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/basicFlame.html"));

    db.Couple.findAll(
      {
        order: [
          ["compatability", "DESC"]
        ]
      })
      .then(function (data) {

        var couplesArr = [];

        data.forEach(couple => {
          couplesArr.push(couple);
        });

        res.render("scores", {
          couple: couplesArr
        });
      });
  })
}
