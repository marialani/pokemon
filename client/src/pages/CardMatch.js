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
//// time taken to complete the game

// const cardArr1 = [...Array(5).keys()].map((val) => val + 1);
// const cardArr2 = [...Array(5).keys()].map((val) => val + 1);
// const cardArr = [...cardArr1, ...cardArr2];

const CardMatch = () => {
  const [newCardArr, setNewCardArr] = useState([]);
  const [lastClickedIndex, setLastClickedIndex] = useState();
  const [found, setFound] = useState([]);
  const [numberOfPairs, setNumberOfPairs] = useState(0);
  const [cardsStatus, setCardsStatus] = useState(
    numberOfPairs ? [...Array(numberOfPairs * 2).fill(false)] : []
  );

  const cardArr = useMemo(() => {
    if (numberOfPairs) {
      const cardArr1 = [...Array(numberOfPairs).keys()].map((val) => val + 1);
      const cardArr2 = [...Array(numberOfPairs).keys()].map((val) => val + 1);
      return [...cardArr1, ...cardArr2];
    }
    return [];
  }, [numberOfPairs]);

  useEffect(() => {
    setNewCardArr(randomiseCards(cardArr));
    setCardsStatus([...Array(cardArr.length).fill(false)]);
    return () => {
      setNewCardArr([]);
    };
  }, [cardArr]);

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
      <br />
      <br />

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <label htmlFor="number of pairs">
          <input
            id="number of pairs"
            type="number"
            min="5"
            max="10"
            value={numberOfPairs}
            onChange={(e) => {
              if (
                parseInt(e.target.value) > 4 &&
                parseInt(e.target.value) < 11
              ) {
                setNumberOfPairs(parseInt(e.target.value));
              }
              return;
            }}
            style={{
              color: "rgb(192, 163, 16)",
              fontWeight: "700",
              textAlign: "center",
              backgroundColor: "rgb(64, 113, 177)",
              border: "5px solid rgb(192, 163, 16)",
              padding: "0.25rem 0.5rem",
              borderRadius: "5px",
            }}
          />
        </label>
      </div>
      <Typography
        color="primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5vh 5vw",
        }}
      >
        Select the number of pairs that will appear on the board using the input
        above.
        <br />
        You may select any number between 5 - 10.
        <br />
        The more cards on the board the harder the game will be!
        <br />
        <br />
        Each card will have a matching pair somewhere on the board.
        <br />
        Flip a card and then try to find its' match.
        <br />
        <br />
        If you don't find a match, the selected cards will be flipped back over
        and you may try again.
        <br />
        When all of the pairs have been found, you have completed the game!
      </Typography>

      <Grid
        container
        justify="center"
        style={{
          margin: "1rem 0.5rem 0 0.5rem",
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
