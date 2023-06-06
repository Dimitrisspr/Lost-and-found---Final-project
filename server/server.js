const express = require("express");
const app = express();
const freeRoutes = require("./routes/freeRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const verifyToken = require("./authorize");
require("./connection");
const cors = require("cors");
const port = 8000;
app.use(express.json());
app.use(cors());
app.use("/", freeRoutes);
app.use("/auth", verifyToken, protectedRoutes);
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 50000,
  })
);



app.listen(port, () => {
  console.log(`our server listens on port ${port}`);
});
