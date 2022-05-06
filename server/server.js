// express 모듈 호출
const express = require("express");
const app = express();

const api = require("./Router/index");
const BoardData = require("./Router/BoardData"); 
const CommentData = require("./Router/CommentData");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", api);
app.use("/api/boards", BoardData);
app.use("/api/comments", CommentData);
// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});