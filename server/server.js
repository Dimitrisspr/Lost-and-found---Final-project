const express = require("express");
const app = express();
const freeRoutes = require("./routes/freeRoutes")
const protectedRoutes = require("./routes/protectedRoutes")
require("./connection")

const port = 8000;
app.use(express.json())

app.use("/", freeRoutes)
app.use("/auth", protectedRoutes)

app.listen(port, () => {
  console.log(`our server listens on port ${port}`);
});
