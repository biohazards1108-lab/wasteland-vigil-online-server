const schema = require("@colyseus/schema");
const { Schema, type } = schema;

class Player extends Schema {
  @type("string") id;
  @type("number") x = 0;
  @type("number") y = 0;
  @type("number") hp = 100;
}

module.exports = { Player };
