const router = require("express").Router();
const config = require("./../../config/config.json")['development'];
const {Pool} = require('pg');
const Query = require('pg').Query;
const pg = new Pool(config);

/* 게시판 접속시 */
router.get("/:boardseq", (req,res) => {
  const {boardseq} = req.params; // Semantic URL을 이용하여 접근, params 사용

  /* DB 연결 */
  pg.connect(err => {
    if (err) {
      console.log('Failed to connect db ' + err)
    } else {
      console.log('Connect to db done!')
    }
  });

  const query = new Query(`SELECT * FROM boards where boardseq = ${boardseq}`); // 게시판 번호(boardseq)에 따라 다른 값이 나옴.
  pg.query(query);

  let rows = [];

  query.on("row", (row) => {
    rows.push(row);
  })
  query.on('end', () => { 
    console.log(rows); 
    console.log('query done'); 
    res.json(rows); 
    res.status(200).end(); 
  }); 
  query.on('error', err => { console.error(err.stack) });
});

/* 게시글 접속시 */
router.get("/:boardseq/:postseq/", (req,res) => {
  const {boardseq, postseq} = req.params; 
  res.json({boardseq : boardseq, posts : postseq});
});



module.exports = router;