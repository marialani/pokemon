import React, { useState } from "react";
import { FlippableCard } from "../components/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CardMatch = () => {
  // const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    console.log(this.props);
  }

  const cardArr1 = [...Array(10).keys()].map((val) => val + 1);
  const cardArr2 = [...Array(10).keys()].map((val) => val + 1);
  const cardArr = [...cardArr1, ...cardArr2];
  // check whether card is flipped
  // store which ones have been solved
  // if match = not render/disappear
  // if dont match react spring turn back over
  // --- hard code list of cards to disappear as a test
  // test for win condition (once every card disappeared)

  // set={() => {}}

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Typography
        color="primary"
        variant="h5"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5vh 5vw 0 5vw",
          textDecoration: "underline double rgba(230, 211, 0, 1)",
        }}
      >
        Test your memory with this card matching game.
      </Typography>
      <Typography
        color="primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5vh 5vw",
        }}
      >
        Each card will have a matching pair somewhere on the board.
        <br />
        <br />
        Select the level of difficulty using the drop down below. There are 3
        options 'Easy', 'Medium', or 'Hard'.
        <br />
        <br />
        Flip a card and try to find its' matching pair
        <br />
        <br />
        If you don't find a match, the selected cards will be flipped back over
        and you may try again.
        <br />
        <br />
        When you find a match they will be are removed from the board until the
        board is cleared.
      </Typography>
      <Grid
        container
        justify="center"
        style={{
          paddingTop: "1rem",
          backgroundImage: "url(" + "assets/images/card-match-bkg.png" + ")",
          // backgroundPosition: "center",
          backgroundSize: "25%",
          // backgroundRepeat: "no-repeat",
        }}
      >
        {cardArr.map((card, index) => (
          <FlippableCard key={index} cardId={card} onClick={handleClick} />
        ))}
      </Grid>
    </div>
  );
};

export default CardMatch;
//
