const express = require("express");
const freeRoutes = require("./routes/freeRoutes")
require("./connection")

const port = 8000;
const app = express();

app.use("/", freeRoutes)

app.listen(port, () => {
  console.log(`our server listens on port ${port}`);
});
