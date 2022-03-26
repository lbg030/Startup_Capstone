const express = require("express");
const app = express();

const test = require("./Router/test");
const board = require("./Router/board/data"); 

app.use(express.json());

app.use("/api", test);
app.use("/api/board",board);

const port = 4000;
app.listen(port, () => console.log(`${port}`));
