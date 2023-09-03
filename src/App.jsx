import { useGlobalContext } from "./context";

import CardList from "./components/CardList";

const App = () => {
  const { turns } = useGlobalContext();

  return (
    <>
      <div className="main">
        <h1>Cards Game</h1>
        {/* <div className="btn-cnt">
          <h3>Select number of cards:</h3>
          <button>12</button>
          <button>16</button>
          <button>20</button>
          <button>24</button>
        </div> */}
        <CardList />
        <h2>Turns: {turns} </h2>
      </div>
    </>
  );
};

export default App;
