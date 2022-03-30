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
  const {boardseq,postseq} = req.params; // Semantic URL을 이용하여 접근, params 사용

  /* DB 연결 */
  pg.connect(err => {
    if (err) {
      console.log('Failed to connect db ' + err)
    } else {
      console.log('Connect to db done!')
    }
  });

  const query = new Query(`SELECT * FROM boards where boardseq = ${boardseq} and postseq = ${postseq}`);
  pg.query(query);

  let rows = [];

  query.on("row", (row) => {
    rows.push(row);
  })
  query.on('end', () => { 
    console.log(rows);
    console.log('query done'); 
    res.send(rows); 
    res.status(200).end(); 
  }); 
  query.on('error', err => { console.error(err.stack) });
});

/* 게시글 작성 */
router.post("/:boardseq/write", (req,res) => {
  const {boardseq} = req.params; 
  const {title,content,writer} = req.body;
  /* DB 연결 */
  pg.connect(err => {
    if (err) {
      console.log('Failed to connect db ' + err)
    } else {
      console.log('Connect to db done!')
    }
  });

  const query = new Query(`INSERT INTO BOARDS(boardseq, writer, content) VALUES(${boardseq},'${writer}', '${content}')`);
  
  pg.query(query, (err, res) => {
    console.log(err,res);
    pg.end();
  });
  return res.status(200).json({ result: "ok" });
});

/* 게시글 수정 */
router.post("/:boardseq/:postseq/modify", (req,res) => {
  const {postseq} = req.params; 
  const {content} = req.body;
  /* DB 연결 */
  pg.connect(err => {
    if (err) {
      console.log('Failed to connect db ' + err)
    } else {
      console.log('Connect to db done!')
    }
  });

  const query = new Query(`UPDATE boards SET content = '${content}' WHERE postseq = ${postseq}`);
  pg.query(query, (err, res) => {
    console.log(err,res);
    pg.end();
  });
  return res.status(200).json({ result: "ok" });
});

/* 게시글 삭제 */
router.post("/:boardseq/:postseq/remove", (req,res) => {
  const {postseq} = req.params; 
  const {id} = req.body;
  /* DB 연결 */
  pg.connect(err => {
    if (err) {
      console.log('Failed to connect db ' + err)
    } else {
      console.log('Connect to db done!')
    }
  });

  const query = new Query(`DELETE FROM boards WHERE postseq = ${postseq} and writer = '${id}'`);
  pg.query(query, (err, res) => {
    console.log(err,res);
    pg.end();
  });
  return res.status(200).json({ result: "ok" });
});

module.exports = router;