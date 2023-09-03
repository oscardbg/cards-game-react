const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_IMAGES": {
      return { ...state, cardList: payload };
    }
    default:
      return state;
  }
};

export default reducer;
