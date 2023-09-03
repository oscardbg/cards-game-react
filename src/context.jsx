import { createContext, useState, useEffect, useContext, useReducer } from "react";

import reducer from "./reducer";
import { imgsData } from "./list";
import { isObjEmpty, genValues } from "./utils";

const AppContext = createContext();

const initialState = {
  num: 12,
  cardList: [],
  choiceOne: {},
  choiceTwo: {},
  turns: 0,
  disabled: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function getImages() {
    const imgElems = [];
    genValues(12, imgsData.length).forEach((val) => {
      imgElems.push(imgsData[val]);
    });
    const cardImgs = [...imgElems, ...imgElems]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: crypto.randomUUID() }));

    dispatch({ type: "SET_IMAGES", payload: cardImgs });
  }

  useEffect(() => {
    getImages();
  }, []);

  function handleChoice(card) {
    const { choiceOne, choiceTwo } = state;

    if (!isObjEmpty(choiceOne)) {
      if (choiceOne.id !== card.id) {
        dispatch({ type: "SET_CHOICE_TWO", payload: card });
      }
    } else {
      dispatch({ type: "SET_CHOICE_ONE", payload: card });
    }
  }

  function disableCard() {
    dispatch({ type: "DISABLE_CARD" });
  }

  useEffect(() => {
    const { choiceOne, choiceTwo } = state;
    if (!isObjEmpty(choiceOne) && !isObjEmpty(choiceTwo)) {
      disableCard();
      if (choiceOne.src === choiceTwo.src) {
        dispatch({ type: "FLIP" });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1200);
      }
    }
  }, [state.choiceTwo]);

  function resetTurn() {
    dispatch({ type: "RESET_TURN" });
  }

  return <AppContext.Provider value={{ ...state, handleChoice }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
