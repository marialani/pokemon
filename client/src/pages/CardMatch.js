import React, { useState, useEffect, useMemo } from "react";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import randomiseCards from "../utils/randomiseCards";

// randomise cardArr numbers, 1-156
// reorganise grid layout of the game
// create state to disable click event between settimeouts
// bug fix double click
// create confetti-esque celebration when all matches found
//// create sound effects for matches found
//// possibly and time taken to complete the game

// const cardArr1 = [...Array(5).keys()].map((val) => val + 1);
// const cardArr2 = [...Array(5).keys()].map((val) => val + 1);
// const cardArr = [...cardArr1, ...cardArr2];

const CardMatch = () => {
  const [newCardArr, setNewCardArr] = useState([]);
  const [lastClickedIndex, setLastClickedIndex] = useState();
  const [found, setFound] = useState([]);
  const [numberOfPairs, setNumberOfPairs] = useState(5);
  const [cardsStatus, setCardsStatus] = useState([
    ...Array(numberOfPairs * 2).fill(false),
  ]);

  const cardArr = useMemo(() => {
    const cardArr1 = [...Array(numberOfPairs).keys()].map((val) => val + 1);
    const cardArr2 = [...Array(numberOfPairs).keys()].map((val) => val + 1);
    return [...cardArr1, ...cardArr2];
  }, [numberOfPairs]);

  useEffect(() => {
    setNewCardArr(randomiseCards(cardArr));
    setCardsStatus([...Array(cardArr.length).fill(false)]);
  }, [cardArr]);

  // console.log(newCardArr);
  // console.log(cardArr);
  console.log(typeof numberOfPairs);

  const flipCard = (indexToFlip, cardId) => {
    // console.log(
    //   `flipCard called with indexToFlip ${indexToFlip}, cardId ${cardId}, lastClickedIndex ${lastClickedIndex}`
    // );
    if (lastClickedIndex === indexToFlip) {
      return;
    }
    if (lastClickedIndex === undefined) {
      cardsStatus[indexToFlip] = true;
      setLastClickedIndex(indexToFlip);
    } else {
      if (newCardArr[lastClickedIndex] === newCardArr[indexToFlip]) {
        // console.log("match");
        setFound(() => found.concat([cardId]));
        // console.log("found", found);
        cardsStatus[lastClickedIndex] = true;
        cardsStatus[indexToFlip] = true;
      } else {
        // console.log("no-match");
        setTimeout(() => {
          const newCardStatus = [...cardsStatus];
          newCardStatus[lastClickedIndex] = false;
          newCardStatus[indexToFlip] = false;
          setCardsStatus(newCardStatus);
        }, 1000);
        cardsStatus[indexToFlip] = true;
      }
      setLastClickedIndex(undefined);
    }
    setCardsStatus(cardsStatus);
    // console.log("current array status", currentState);
  };

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
        {/* <br />
        Select the level of difficulty using the drop down below. There are 3
        options 'Easy', 'Medium', or 'Hard'.
        <br /> */}
        <br />
        Flip a card and then try to find its' match
        <br />
        <br />
        If you don't find a match, the selected cards will be flipped back over
        and you may try again.
        <br />
        <br />
        When all of the pairs have been found, you have completed the game!
      </Typography>
      <input
        type="number"
        min="5"
        max="10"
        value={numberOfPairs}
        onChange={(e) => setNumberOfPairs(parseInt(e.target.value))}
      />
      <Grid
        container
        justify="center"
        style={{
          paddingTop: "1rem",
          backgroundImage: "url(assets/images/card-match-bkg.png)",
          backgroundSize: "25%",
        }}
      >
        {newCardArr.map((cardId, index) => (
          <Card
            key={index}
            cardId={cardId}
            flipped={cardsStatus[index]}
            set={() => flipCard(index, cardId)}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CardMatch;
