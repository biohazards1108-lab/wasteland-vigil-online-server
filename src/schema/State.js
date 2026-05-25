const schema = require("@colyseus/schema");
const { Schema, type, MapSchema } = schema;
const { Player } = require("./Player");

class State extends Schema {
  @type({ map: Player }) players = new MapSchema();
}

module.exports = { State };
