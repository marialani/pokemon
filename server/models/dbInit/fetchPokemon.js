const fetch = require("node-fetch");

async function fetchPokemon() {
  const pokePromises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokePromises.push(
      fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err))
    );
  }

  const result = await Promise.all(pokePromises)
    .then((results) => {
      const pokemon = results.map((data) => {
        let movesArr = [];
        for (let i = 0; i < 5; i++) {
          movesArr.push(
            data.moves[Math.floor(Math.random() * data.moves.length)].move.name
          );
        }
        return {
          name: data.name,
          weight: data.weight + "kg",
          front_image: data.sprites["front_default"],
          back_image: data.sprites["back_default"],
          moves: [...new Set(movesArr)].join(", "),
          type: data.types.map((type) => type.type.name).join(", "),
        };
      });
      console.log(pokemon);
      return pokemon;
    })
    .catch((error) => console.log(error));
  return result;
}

// function call to verify results in node with the console log above
// fetchPokemon();

module.exports = fetchPokemon;
