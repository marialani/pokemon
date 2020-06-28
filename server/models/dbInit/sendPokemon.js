const fetchPokemon = require("./fetchPokemon");
const PokemonDataEntry = require("../pokemonDataEntry");

async function sendPokemon() {
  const results = await fetchPokemon();
  await results.map((pokemon) => {
    let singlepokemon = new PokemonDataEntry({
      name: pokemon.name,
      weight: pokemon.weight,
      front_image: pokemon.front_image,
      back_image: pokemon.back_image,
      moves: pokemon.moves,
      type: pokemon.type,
    });

    singlepokemon.save();
    console.log("Database updated with result");
  });
}

// uncomment module export, invoke in app.js, run server ONCE to populate mongo db
// module.exports = sendPokemon;
