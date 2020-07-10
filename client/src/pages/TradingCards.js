import React from "react";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const TradingCards = () => {
  const cardArr = [...Array(156).keys()].map((val) => val + 1);

  return (
    <>
      <Typography
        variant="h6"
        color="primary"
        style={{
          textAlign: "center",
          width: "100%",
          padding: "2rem 0",
          textDecoration: "underline double rgba(230, 211, 0, 1)",
        }}
      >
        View all of the original pokemon trading cards
      </Typography>

      <Grid container justify="center" style={{ paddingTop: "1rem" }}>
        {cardArr.map((card) => (
          <Card key={card} cardId={card} flipped="1" set={() => {}} />
        ))}
      </Grid>
    </>
  );
};

export default TradingCards;
