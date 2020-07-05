import React from "react";
import Grid from "@material-ui/core/Grid";
import PokemonGif from "../components/ExplorePage/PokemonGif";
import ExploreSlider from "../components/ExploreSlider";

const Explore = () => {
  return (
    <Grid
      container
      // justify="center"
      item
      xs={12}
      style={{ paddingTop: "3rem" }}
    >
      <Grid
        item
        xs={12}
        container
        // direction="column"
        justify="center"
        alignItems="center"
        style={{ paddingRight: "4%" }}
      >
        {/* <PokemonGif image="/assets/images/animatedgifs/jigglypuff.gif" /> */}
        <PokemonGif image="/assets/images/animatedgifs/eevee.gif" />
        <PokemonGif image="/assets/images/animatedgifs/charmander.gif" />
        <PokemonGif image="/assets/images/animatedgifs/bulbasaur.gif" />
        <PokemonGif image="/assets/images/animatedgifs/cubone.gif" />
        {/* <PokemonGif image="/assets/images/animatedgifs/abra.gif" /> */}
        {/* <PokemonGif image="/assets/images/animatedgifs/weezing.gif" /> */}
      </Grid>
      <Grid item xs={12} container justify="center">
        <ExploreSlider />
      </Grid>
      {/* <Grid
        item
        xs={12}
        container
        // direction="column"
        justify="center"
        alignItems="center"
      >
        <PokemonGif image="/assets/images/animatedgifs/blastoise.gif" /> */}
      {/* <PokemonGif image="/assets/images/animatedgifs/meowth.gif" /> */}
      {/* <PokemonGif image="/assets/images/animatedgifs/abra.gif" /> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default Explore;
