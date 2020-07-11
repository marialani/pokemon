import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import { gql } from "apollo-boost";

// const getPokemonQuery = gql`
// {

// }
// `;

const WhosThatPokemon = () => {
  return (
    <>
      <Typography
        color="primary"
        variant="h5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "5vh 5vw",
          textDecoration: "underline double rgba(230, 211, 0, 1)",
        }}
      >
        Guess the pokemon before time runs out!
      </Typography>
      <Grid container style={{ width: "100%" }}>
        <div style={{ width: "50%" }}></div>
        <img
          src="assets/images/animatedgifs/flashing-bkg.gif"
          style={{ width: "50%", height: "50%" }}
          alt="spotlight"
        />
      </Grid>
    </>
  );
};

export default WhosThatPokemon;
