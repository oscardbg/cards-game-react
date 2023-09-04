import { useGlobalContext } from "./context";

import CardList from "./components/CardList";

const nums = [8, 12, 16, 20, 24];

const App = () => {
  const { turns, setAmount, showPopup } = useGlobalContext();

  return (
    <>
      {/* {showPopup && <div className="popup">Start playing...</div>} */}
      <div className={`${showPopup ? "main disable" : "main"}`}>
        <h1>Cards Game</h1>
        <div className="btn-cnt">
          <h3>Select number of cards:</h3>
          {nums.map((n, i) => (
            <button key={i} onClick={() => setAmount(n)}>
              {n}
            </button>
          ))}
        </div>
        <CardList />
        <h2>Turns: {turns} </h2>
      </div>
    </>
  );
};

export default App;
