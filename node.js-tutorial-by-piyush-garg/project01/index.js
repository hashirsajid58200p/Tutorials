const express = require("express");
const userRouter = require("./routes/user");

const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares/index");
const app = express();
const port = 8000;

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("server is listening on port 8000");
});
