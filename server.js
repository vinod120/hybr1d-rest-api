const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
let routes = null;

app.use(cors());
app.use(express.json());

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
    var token = req.headers["auth-token"];
    if (token) {
      console.log({ token });
    } else {
      return res.status(403).send({
        success: false,
        message: "No token provided",
      });
    }
  } else {
    next();
  }
});

const initialize = async () => {
  let PORT = process.env.PORT || 8080;
  app.listen(PORT);
  routes = require("./routes");
  routes(app);
  console.log(`The server is up and runnig ${PORT}`);
};

initialize();
