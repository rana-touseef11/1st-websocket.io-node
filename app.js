const express = require("express");
const app = express();
const socket = require("socket.io");
const port = 3001;

app.use(express.static("static"));

const server = app.listen(port, () => {
  console.log(`I am listening at ${port}`);
});

const io = socket(server);

io.on("connection", (socket) => {
  //   console.log(`i am listen ${socket.id}`);

  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
    // console.log(data);
  });
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
