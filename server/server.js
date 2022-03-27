// express 모듈 호출
const express = require("express");
const app = express();
const api = require("./Router/index");
const cors = require("cors");
const bodyParser = require("body-parser");
// api 처리는 './routes/index'에서 일괄처리
app.use("/api", api);
app.use(cors());
app.use(bodyParser.json());
// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

pgClient.connect();

//회원가입
// app.post("/register", (req, res, next) => {

//유저 정보 가져오는 거 테스트
app.get("/api/get", async (req, res) => {
  const total = await pgClient.query("select * from user_group");
  res.send(total);
});

app.post("/api/insert", (req, res) => {
  const user_group = [
    req.body.user_name,
    req.body.user_id,
    req.body.user_password,
    req.body.user_password_confirm,
    req.body.user_email,
    req.body.user_mobile,
    req.body.user_gender,
  ];

  const sql =
    "insert into user_group(user_name,user_id,user_password,user_password_confirm,user_email,user_mobile,user_gender) values($1,$2,$3,$4,$5,$6,$7)";

  pgClient.query(sql, user_group, (err, row) => {
    if (err) console.log(err);
  });

  return res.status(200).json({ result: "ok" });
});
