const express = require("express");
const app = express();
const test = require("./Router/test");
const config = require("./config/config.json")['development'];
const {Pool} = require('pg');

const pg = new Pool(config);

pg.connect(err => {
  if(err) console.log(err);
  else {
    console.log("데이터베이스 연결 성공");
  }
})

app.use("/api", test);

const port = 4000;
app.listen(port, () => console.log(`${port}`));
