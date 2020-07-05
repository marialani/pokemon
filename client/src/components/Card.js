import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    minWidth: "300px",
    minHeight: "320px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    position: "relative",
  },
  image: {
    maxWidth: "300px",
    height: "300px",
    padding: "0.5rem",
  },
  c: {
    position: "absolute",
    maxWidth: "300px",
    height: "300px",
    cursor: "pointer",
    willChange: "transform, opacity",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    alignSelf: "flex-end",
  },

  back: {
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop)",
  },

  front: {
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop)",
  },
});

export const FlippableCard = ({ cardId }) => {
  const [flipped, set] = useState(false);
  return <Card cardId={cardId} flipped={flipped} set={set} />;
};

export const Card = ({ cardId, flipped, set }) => {
  const classes = useStyles();

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 2, tension: 500, friction: 80 },
  });

  let cardNumber = window.location.pathname === "/trading-cards" && (
    <h6
      style={{
        fontSize: "1.2rem",
        alignSelf: "flex-start",
        margin: 0,
        color: "#3564AD",
      }}
    >
      #{cardId}
    </h6>
  );

  let cardImage = window.location.pathname === "/card-match" && (
    <a.div
      className={`${classes.c}`}
      style={{
        width: "100%",
        opacity: opacity.interpolate((o) => 1 - o),
        transform,
      }}
    >
      <img
        src="assets/images/homepage/pokemon-card.jpg"
        alt="pokemon card"
        className={classes.image}
      />
    </a.div>
  );

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      lg={2}
      className={classes.grid}
      onClick={() => set((state) => !state)}
    >
      {cardNumber}
      {cardImage}
      <a.div
        className={`${classes.c}`}
        style={{
          width: "100%",
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        <img
          src={`assets/images/cards/${cardId}.jpg`}
          alt="pokemon card"
          className={classes.image}
        />
      </a.div>
    </Grid>
  );
};

// export default Card;
