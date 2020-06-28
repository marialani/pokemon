const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: String,
  weight: String,
  front_image: String,
  back_image: String,
  moves: String,
  type: String,
});

// add height, weakness, stregnths

const PokemonDataEntry = mongoose.model("pokemon", pokemonSchema);

module.exports = PokemonDataEntry;
// model = collection in the db
