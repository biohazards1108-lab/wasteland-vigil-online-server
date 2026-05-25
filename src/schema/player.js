const schema = require("@colyseus/schema");
const { Schema, type } = schema;

class Player extends Schema {
  constructor() {
    super();
    this.id = "";
    this.x = 0;
    this.y = 0;
    this.hp = 100;
  }
}

schema.defineTypes(Player, {
  id: "string",
  x: "number",
  y: "number",
  hp: "number"
});

module.exports = { Player };
