const express = require("express");
const { readFile } = require("./Module/FsModule");
const app = express();

const PORT = 3000;
app.listen((req, res) => {
  console.log(`Server is running on ${PORT}`);
});
