"use strict";
var path = require("path");
module.exports = function (app) {
  const Users = require("./controllers/userContrllors");
  const Catelog = require("./controllers/catelogControllers");
  const Orders = require("./controllers/ordersController")

  app.route("/").get(function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
  });

  app.route("/api/auth/register").post(Users.createUser);
  app.route("/api/auth/login").post(Users.userLogin);
  app.route("/api/buyer/list-of-sellers").get(Users.getListOfSellers);
  app.route("/api/seller/create-catalog").post(Catelog.createCatelog);
  app.route("/api/buyer/seller-catalog/seller-id").get(Catelog.getCatelogBySeller)
  app.route("/api/buyer/create-order/seller-id").post(Orders.createOrder)
  app.route("/api/seller/orders").get(Orders.getAllOrdersOfSeller)
};
