const schema = require("@colyseus/schema");
const { Schema, type, MapSchema } = schema;
const { Player } = require("./Player");

class State extends Schema {
  constructor() {
    super();
    this.players = new MapSchema();
  }
}

schema.defineTypes(State, {
  players: { map: Player }
});

module.exports = { State };
