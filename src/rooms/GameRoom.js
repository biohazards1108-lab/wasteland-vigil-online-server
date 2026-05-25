const colyseus = require("colyseus");
const { State } = require("../schema/State");
const { Player } = require("../schema/Player");

class GameRoom extends colyseus.Room {
  onCreate(options) {
    this.setState(new State());

    // Handle messages from clients
    this.onMessage("move", (client, data) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;

      if (typeof data.x === "number") player.x = data.x;
      if (typeof data.y === "number") player.y = data.y;
    });

    this.onMessage("damage", (client, data) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;

      if (typeof data.amount === "number") {
        player.hp = Math.max(0, player.hp - data.amount);
      }
    });
  }

  onJoin(client, options) {
    const player = new Player();
    player.id = client.sessionId;
    this.state.players.set(client.sessionId, player);
    console.log("Player joined:", client.sessionId);
  }

  onLeave(client, consented) {
    this.state.players.delete(client.sessionId);
    console.log("Player left:", client.sessionId);
  }

  onDispose() {
    console.log("Room disposed");
  }
}

module.exports = { GameRoom };
