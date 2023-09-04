import { useGlobalContext } from "./context";

import Menu from "./components/Menu";
import Game from "./components/Game";

const App = () => {
  const { playing } = useGlobalContext();

  return (
    <>
      <div className="main">
        <h1 className="title">Cards Game</h1>
        {!playing && <Menu />}
        {playing && <Game />}
      </div>
    </>
  );
};

export default App;
