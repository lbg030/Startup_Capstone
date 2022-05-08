const router = require("express").Router();
const config = require("../config/config.json")['development'];
const {Pool} = require('pg');
const pg = new Pool(config);


/* 게시판 접속시 */
router.get("/:boardseq", async (req,res) => {
  const client = await pg.connect();
  const {boardseq} = req.params; // Semantic URL을 이용하여 접근, params 사용
  const total = await client.query(`select * from boards where boardseq = ${boardseq}`);  
  res.send(total.rows);
  client.release(true);
});

/* 게시글 접속시 */
router.get("/:boardseq/:postseq", async (req,res) => {
  const client = await pg.connect();
  const {boardseq,postseq} = req.params; 
  const total = await client.query(`select * from boards where boardseq = ${boardseq} and postseq = ${postseq}`);
  console.log(total.rows);
  res.send(total.rows[0]);
  client.release(true);
});

/* 게시글 작성 */
router.post("/:boardseq/write", async (req,res) => {
  const client = await pg.connect();
  const {boardseq} = req.params; 
  const {title,content,writer} = req.body;
  console.log(boardseq);
  console.log(content);
  await client.query(`insert into boards(boardseq, writer, content, title) values(${boardseq}, '${writer}', '${content}', '${title}')`);
  res.status(200).json({ result: "ok" });
  client.release(true);
});

/* 게시글 수정 */
router.post("/:boardseq/:postseq/modify", async (req,res) => {
  const client = await pg.connect();
  const {boardseq, postseq} = req.params; 
  const {content, title} = req.body;
  await client.query(`update boards set title = '${title}', content = '${content}' where boardseq = ${boardseq} and postseq = ${postseq}`);
  res.status(200).json({ result: "ok" });
  client.release(true);
});

/* 게시글 삭제 */
router.post("/:boardseq/:postseq/remove", async (req,res) => {
  const client = await pg.connect();
  const {postseq,boardseq} = req.params; 
  const {writer} = req.body;
  console.log("postseq: " + postseq + " " + "writer: " + writer);
  await client.query(`delete from boards where postseq = ${postseq} and writer = '${writer}'`);
  await client.query(`delete from comment_table where postseq = ${postseq} and boardseq = ${boardseq}`);
  res.status(200).json({ result: "ok" });
  client.release(true);
});

module.exports = router;