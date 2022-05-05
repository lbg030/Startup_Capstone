const router = require("express").Router();
const config = require("./../../config/config.json")['development'];
const {Pool} = require('pg');
const Query = require('pg').Query;
const pg = new Pool(config);

pg.connect(err => {
  if (err) {
    console.log('Failed to connect db ' + err)
  } else {
    console.log('Connect to db done!')
  }
});

/* 게시판 접속시 */
router.get("/:boardseq", async (req,res) => {
  const {boardseq} = req.params; // Semantic URL을 이용하여 접근, params 사용
  const total = await pg.query(`select * from boards where boardseq = ${boardseq}`);
  res.send(total.rows);
});

/* 게시글 접속시 */
router.get("/:boardseq/:postseq", async (req,res) => {
  const {boardseq,postseq} = req.params; // Semantic URL을 이용하여 접근, params 사용
  // const query = new Query(`SELECT * FROM boards where boardseq = ${boardseq} and postseq = ${postseq}`);
  // pg.query(query);
  const total = await pg.query(`select * from boards where boardseq = ${boardseq} and postseq = ${postseq}`);
  console.log(total.rows);
  res.send(total.rows[0]);
});

/* 게시글 작성 */
router.post("/:boardseq/write", (req,res) => {
  const {boardseq} = req.params; 
  const {title,content,writer} = req.body;
  console.log(boardseq);
  console.log(content);
  const query = new Query(`insert into boards(boardseq, writer, content, title) values(${boardseq}, '${writer}', '${content}', '${title}')`);
  
  pg.query(query, (err, res) => {
    console.log(err,res);
    pg.end();
  });
  return res.status(200).json({ result: "ok" });
});

/* 게시글 수정 */
router.post("/:boardseq/:postseq/modify", (req,res) => {
  const {boardseq, postseq} = req.params; 
  const {content, title} = req.body;
  const query = new Query(`update boards set title = '${title}', content = '${content}' where boardseq = ${boardseq} and postseq = ${postseq}`);
  pg.query(query, (err, res) => {
    console.log(err,res);
    pg.end();
  });
  return res.status(200).json({ result: "ok" });
});

/* 게시글 삭제 */
router.post("/:boardseq/:postseq/remove", (req,res) => {
  const {postseq} = req.params; 
  const {writer} = req.body;
  console.log("postseq: " + postseq + " " + "writer: " + writer);
  const query = new Query(`delete from boards where postseq = ${postseq} and writer = '${writer}'`);
  pg.query(query, (err, res) => {
    console.log(err,res);
    pg.end();
  });
  return res.status(200).json({ result: "ok" });
});

module.exports = router;