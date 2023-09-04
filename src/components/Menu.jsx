import { useGlobalContext } from "../context";

const vals = [8, 12, 16, 20, 24];

const Menu = () => {
  const { setAmount } = useGlobalContext();

  return (
    <>
      <section className="menu">
        <h1 className="title">Cards Game</h1>
        <h2>Play</h2>
        <p>Select the number of cards to start playing:</p>
        <div className="btn-cnt">
          {vals.map((val, i) => (
            <button key={i} onClick={() => setAmount(val)}>
              {val} cards
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
