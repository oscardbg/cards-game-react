import { useGlobalContext } from "./context";

import CardList from "./components/CardList";

const App = () => {
  const { cardList } = useGlobalContext();

  return (
    <>
      <div className="main">
        <h1>Cards Game</h1>
        <CardList />
      </div>
    </>
  );
};

export default App;
