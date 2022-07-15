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
    var token = req.body.token || req.query.token || req.headers["auth-token"];
    if (!token)
      return res.status(401).json("A token is required for authentication");
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
  let PORT = process.env.PORT || 8080;
  app.listen(PORT);
  routes = require("./routes");
  routes(app);
  console.log(`The server is up and runnig ${PORT}`);
};

initialize();
