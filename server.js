const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Đã Treo Tài Khoản");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Đã Treo Tài Khoản 24/7/365");
  });
}

module.exports = keepAlive;
