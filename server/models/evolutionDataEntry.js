const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonEvolutionSchema = new Schema({
  names: String,
});

module.exports = mongoose.model("pokemonEvolutions", pokemonEvolutionSchema);
// model = collection in the db
