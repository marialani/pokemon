import React, { useState } from "react";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";

const TradingCards = () => {
  const [flipAll, setFlipAll] = useState(false);
  const cardArr = [...Array(20).keys()].map((val) => val + 1);
  function handleClick() {
    setFlipAll((state) => !state);
  }

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          margin: "2rem",
          height: "10vh",
          width: "10vw",
          backgroundColor: "blue",
        }}
      ></button>

      <Grid container justify="center" style={{ paddingTop: "1rem" }}>
        {cardArr.map((card) => (
          <Card key={card} cardId={card} flipAll={flipAll} />
        ))}
      </Grid>
    </>
  );
};

export default TradingCards;
