import React from "react";
import { Zoom } from "react-slideshow-image";
import { makeStyles } from "@material-ui/core/styles";

import paths from "../constants/paths";
const imgPaths = paths.homeImages;

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 1.4,
  arrows: false,
};

const useStyles = makeStyles((theme) => ({}));

export default function HomeSlider() {
  const classes = useStyles();

  return (
    <div
      style={{
        height: "100vh",
        background: "url(/assets/images/homepage/wallpaper.jpg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Zoom
        {...zoomOutProperties}
        style={{
          background: "white",
          boxShadow:
            "0 12px 15px rgba(0,0,0,0.7), 0 -12px 15px rgba(0,0,0,0.7)",
        }}
      >
        {imgPaths.map((path, index) => (
          <img
            key={index}
            style={{
              width: "100%",
              maxHeight: "100vh",
              background: "white",
            }}
            src={"/assets/images/homepage/" + path}
          />
        ))}
      </Zoom>
    </div>
  );
}
