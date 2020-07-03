import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerText: {
    position: "absolute",
    maxHeight: "70%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
  },
  bannerImg: {
    width: "100%",
    height: "auto",
    boxShadow:
      "0 8px 10px rgba(0,0,0,0.9), 0 -8px 10px rgba(0,0,0,0.9), 0 18px 0px white inset",
    zIndex: "1",
  },
  grid: {
    position: "relative",
    display: "flex",
  },
});

const BannerImage = ({ heading }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid}>
      <img
        src="assets/images/banner.png"
        className={classes.bannerImg}
        alt="page heading"
      />
      <img className={classes.headerText} src={heading} alt="heading" />
    </Grid>
  );
};

export default BannerImage;
