const router = require("express").Router();
const config = require("../config/config.json")['development'];
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

/* 댓글 불러오기 */
router.get("/:boardseq/:postseq", async (req,res) => {
  const client = await pg.connect();
  const {boardseq, postseq} = req.params; // Semantic URL을 이용하여 접근, params 사용
  const total = await client.query(`select * from comment_table where boardseq = ${boardseq} and postseq = ${postseq}`);
  console.log(total.rows);
  res.send(total.rows);
  client.release(true);
});

/* 댓글 작성 */
router.post("/:boardseq/:postseq/write", async (req,res) => {
  const client = await pg.connect();
  const {boardseq, postseq} = req.params; 
  const {writer, content, commented} = req.body;
  console.log(boardseq);
  console.log(content);
  await client.query(`insert into comment_table(boardseq, postseq, writer, content, commented) values(${boardseq}, ${postseq},'${writer}', '${content}', '${commented}')`);
  res.status(200).json({ result: "ok" });
  client.release(true);
});

module.exports = router;