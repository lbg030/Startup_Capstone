const express = require("express");
const app = express();

const test = require("./Router/test");
const board = require("./Router/board/data"); 
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", test);
app.use("/api/boards",board);

const port = 4000;
app.listen(port, () => console.log(`${port}`));
