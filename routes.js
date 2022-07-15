"use strict";
var path = require("path");
module.exports = function (app) {
  const Users = require("./controllers/registerContrllors");

  app.route("/").get(function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
  });

  app.route("/api/auth/register").post(Users.createUser);
};
