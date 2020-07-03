import React from "react";
import Grid from "@material-ui/core/Grid";
import PokemonGif from "../components/ExplorePage/PokemonGif";
import ExploreSlider from "../components/ExploreSlider";

const Explore = () => {
  return (
    <Grid container item xs={12} style={{ paddingTop: "3rem" }}>
      <Grid
        item
        xs={2}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <PokemonGif image="/assets/images/animatedgifs/jigglypuff.gif" />
        <PokemonGif image="/assets/images/animatedgifs/meowth.gif" />
        <PokemonGif image="/assets/images/animatedgifs/abra.gif" />
        <PokemonGif image="/assets/images/animatedgifs/eevee.gif" />
        <PokemonGif image="/assets/images/animatedgifs/weezing.gif" />{" "}
      </Grid>
      <Grid item xs={8} container>
        <ExploreSlider />
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <PokemonGif image="/assets/images/animatedgifs/charmander.gif" />
        <PokemonGif image="/assets/images/animatedgifs/bulbasaur.gif" />
        <PokemonGif image="/assets/images/animatedgifs/cubone.gif" />
        <PokemonGif image="/assets/images/animatedgifs/butterfree.gif" />
        <PokemonGif image="/assets/images/animatedgifs/blastoise.gif" />
      </Grid>
    </Grid>
  );
};

export default Explore;
