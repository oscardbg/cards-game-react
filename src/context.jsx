import { createContext, useContext, useReducer } from "react";

import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  cardList: [],
  card: {},
  choiceOne: {},
  choiceTwo: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
