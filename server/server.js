const express = require("express");
const app = express();
const freeRoutes = require("./routes/freeRoutes")
require("./connection")

const port = 8000;
app.use(express.json())

app.use("/", freeRoutes)

app.listen(port, () => {
  console.log(`our server listens on port ${port}`);
});
