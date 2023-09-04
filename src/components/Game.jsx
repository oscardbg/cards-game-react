import { useGlobalContext } from "../context";

import CardList from "./CardList";

const Game = () => {
  const { stopPlaying, turns } = useGlobalContext();

  return (
    <>
      <section className="game">
        <div className="info">
          <button onClick={stopPlaying}>Stop Playing</button>
          <p className="turns">Turns: {turns}</p>
        </div>
        <CardList />
      </section>
    </>
  );
};

export default Game;
