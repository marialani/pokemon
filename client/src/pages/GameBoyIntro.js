import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import paths from "../constants/paths";

const useStyles = makeStyles((theme) => ({
  video: {
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
  continue: {
    position: "absolute",
    zIndex: "1",
    right: "1rem",
    bottom: "1rem",
    width: "16vw",
    outline: "none",
    backgroundColor: "whitesmoke",
    borderRadius: "5%",
    "&:hover": {
      filter:
        "drop-shadow(5px 5px 5px #e6bf00) drop-shadow(-5px -5px 5px #e6bf00)",
      cursor: "pointer",
    },
  },
}));

const GameBoyIntro = () => {
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
      <Link to={paths.explore}>
        <img
          src="/assets/images/buttons/Continue_Button.png"
          className={classes.continue}
        />
      </Link>
      <video autoPlay className={classes.video}>
        <source
          src={`${process.env.PUBLIC_URL}/assets/video/prof-oak-intro.mp4`}
          type="video/mp4"
        />
      </video>
    </Grid>
  );
};

export default GameBoyIntro;
