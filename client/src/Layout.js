import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import BannerImage from "./components/BannerImage";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background:
      "radial-gradient(circle, white 10%, whitesmoke 25%, silver 85%, grey 100%) !important",
  },
  menuIcon: {
    backgroundColor: "transparent !important",
  },
}));

export default (props) => {
  const classes = useStyles();
  let location = props.location.pathname;

  const endpoints = {
    "/explore": "https://i.imgur.com/lvGYDNK.png",
    "/trading-cards": "https://i.imgur.com/blG5ROd.png",
    "/card-match": "https://i.imgur.com/NRVQJlr.png",
    "/whos-that-pokemon": "https://i.imgur.com/yM8vuvF.png",
    "/pokedex": "https://i.imgur.com/zzEKxmD.png",
    "/pokemon-battle": "https://i.imgur.com/dl4IKI1.png",
    "/pokemon-quest": "https://i.imgur.com/ncrp81C.png",
    "/enter": "https://i.imgur.com/0Ndn4zJ.png",
  };

  let appBarStyling = location !== "/" && classes.appBar;

  return (
    <div style={{ overflowX: "hidden", minHeight: "100vh" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="stretch"
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Header appBarStyling={appBarStyling} />
        <BannerImage heading={endpoints[location]} />
        <Grid
          item
          xs={12}
          container
          style={{
            background:
              "url(https://veekun.com/static/pokedex/downloads/red-green.png) repeat",
            flexGrow: "1",
            padding: "0 7vw",
          }}
        >
          <Grid
            container
            style={{
              position: "relative",
              backgroundColor: "white",
            }}
          >
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
