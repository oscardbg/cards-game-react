import { useGlobalContext } from "./context";

import Menu from "./components/Menu";
import Game from "./components/Game";

const App = () => {
  const { playing, victory } = useGlobalContext();

  return (
    <>
      <div className={victory ? "main disabled" : "main"}>
        {!playing && <Menu />}
        {playing && <Game />}
      </div>
      {victory && <WinModal />}
    </>
  );
};

const WinModal = () => {
  const { closeModal, turns } = useGlobalContext();
  return (
    <>
      <div className="modal-cnt">
        <div className="modal">
          <div className="head">
            <p>Cards Game</p>
          </div>
          <div className="body">
            <p>
              You have finished the game with <strong> {turns} turns.</strong>
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
