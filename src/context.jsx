import { createContext, useState, useEffect, useContext, useReducer } from "react";

import reducer from "./reducer";
import { imgsData } from "./list";

const AppContext = createContext();

const initialState = {
  num: 12,
  cardList: [],
  card: {},
  choiceOne: {},
  choiceTwo: {},
};

const genValues = (num) => {
  const vals = [];

  while (vals.length < num) {
    let n = Math.floor(Math.random() * imgsData.length);
    if (!vals.includes(n)) {
      vals.push(n);
    }
  }
  return vals;
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function getImages() {
    const imgElems = [];
    genValues(12).forEach((val) => {
      imgElems.push(imgsData[val]);
    });
    const cardImgs = [...imgElems, ...imgElems].map((item) => ({ ...item, id: crypto.randomUUID() }));

    dispatch({ type: "SET_IMAGES", payload: cardImgs });
  }

  useEffect(() => {
    getImages();
  }, []);

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
