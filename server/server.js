const express = require("express");
const port = 8000;
const app = express();
require('./connection');

app.listen(port, () => {
  console.log(`our server listens on port ${port}`);
});
