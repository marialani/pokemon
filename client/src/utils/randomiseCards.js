function randomiseCards(cardsArray) {
  let newCardsArray = cardsArray.slice();
  for (let i = newCardsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newCardsArray[i], newCardsArray[j]] = [newCardsArray[j], newCardsArray[i]];
  }
  return newCardsArray;
}

export default randomiseCards;
