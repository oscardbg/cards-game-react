import { useGlobalContext } from "./context";

import CardList from "./components/CardList";

const App = () => {
  const { turns } = useGlobalContext();

  return (
    <>
      <div className="main">
        <h1>Cards Game</h1>
        <CardList />
        <h2>Turns: {turns} </h2>
      </div>
    </>
  );
};

export default App;
