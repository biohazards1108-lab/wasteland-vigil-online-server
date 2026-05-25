const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("colyseus");
const { GameRoom } = require("./src/rooms/GameRoom");

const app = express();
app.use(cors());
app.use(express.json());

// Simple health/status endpoint
app.get("/status", (req, res) => {
  res.json({ online: true });
});

const port = process.env.PORT || 8080;
const server = http.createServer(app);

// Colyseus server
const gameServer = new Server({
  server,
});

// Register room
gameServer.define("game_room", GameRoom);

server.listen(port, () => {
  console.log(`Colyseus server listening on ${port}`);
});
