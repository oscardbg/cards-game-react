const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_NUM": {
      return { ...state, num: payload, choiceOne: {}, choiceTwo: {} };
    }
    case "SET_IMAGES": {
      return { ...state, cardList: payload, turns: 0 };
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
      const newCardList = state.cardList.map((card) => {
        if (card.src === state.choiceOne.src) {
          return { ...card, matched: true };
        }
        return card;
      });
      return { ...state, cardList: newCardList };
    }
    case "DISABLE_CARD": {
      return { ...state, disabled: true };
    }
    default:
      return state;
  }
};

export default reducer;
