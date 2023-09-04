const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_NUM": {
      return { ...state, num: payload, choiceOne: {}, choiceTwo: {}, playing: true, victory: false };
    }
    case "SET_IMAGES": {
      return { ...state, cardList: payload, turns: 0, victory: false };
    }
    case "SET_CHOICE_ONE": {
      return { ...state, choiceOne: payload };
    }
    case "SET_CHOICE_TWO": {
      return { ...state, choiceTwo: payload };
    }
    case "RESET_TURN": {
      return { ...state, choiceOne: {}, choiceTwo: {}, turns: state.turns + 1, disabled: false };
    }
    case "FLIP": {
      let newVictory = false;
      const newCardList = state.cardList.map((card) => {
        if (card.src === state.choiceOne.src) {
          return { ...card, matched: true };
        }
        return card;
      });
      const goodPicks = newCardList.reduce((acc, item) => {
        if (item.matched) {
          acc += 1;
        }
        return acc;
      }, 0);
      if (goodPicks === state.num * 2) {
        newVictory = true;
      }
      return { ...state, cardList: newCardList, victory: newVictory };
    }
    case "DISABLE_CARD": {
      return { ...state, disabled: true };
    }
    case "STOP_PLAYING": {
      return { ...state, playing: false };
    }
    case "CLOSE_MODAL": {
      return { ...state, victory: false, playing: false };
    }
    default:
      return state;
  }
};

export default reducer;
