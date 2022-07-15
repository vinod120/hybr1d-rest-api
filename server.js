const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
let routes = null;

app.use(cors());
app.use(express.json());
dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, token, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  if (req.path == "/heathcheck") {
    return res.status(200).send({
      success: true,
      message: "Everything is Ok",
    });
  } else if (
    req.path != "/api/auth/login" &&
    req.path != "/api/auth/register"
  ) {
    var token = req.body.token || req.query.token || req.headers["auth-token"];
    if (!token)
      return res.status(401).json("token is required for authentication");
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json("Invalid token");
    }
  } else {
    next();
  }
});

const initialize = async () => {
  let mongoConnect = mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoConnect
    .then(async (db) => {
      console.log("MongoDB connected....");
      db = mongoose.connection;
      db.on("error", console.error.bind(console, "MongoDB connection error:"));
      let PORT = process.env.PORT || 8080;
      app.listen(PORT);
      routes = require("./routes");
      routes(app);
      console.log("Server started on: " + PORT);
    })
    .catch((err) => {
      console.log(err);
    });
};

initialize();
