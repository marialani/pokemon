import React from "react";

const PokemonGif = ({ image }) => {
  return (
    <img
      style={{ maxWidth: "25%", height: "auto", padding: "0.75rem" }}
      src={image}
      alt="pokemon gif"
    />
  );
};

export default PokemonGif;
