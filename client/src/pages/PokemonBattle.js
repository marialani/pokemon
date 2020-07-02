import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  videoDiv: {
    backgroundColor: "black",
    height: "100%",
    flexGrow: "1",
    position: "absolute",
  },
  comingSoon: {
    position: "absolute",
    zIndex: "1",
    width: "60%",
    transform: "rotate(-20deg)",
  },
}));

const PokemonBattle = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      className={classes.videoDiv}
      alignItems="center"
      justify="center"
    >
      <img
        src="https://i.imgur.com/3nFakXO.png"
        className={classes.comingSoon}
      />

      <img
        autoPlay
        className={classes.image}
        src="/assets/images/animatedgifs/pokemon-battle.gif"
      />
    </Grid>
  );
};

export default PokemonBattle;
