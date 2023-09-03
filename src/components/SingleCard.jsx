import { useGlobalContext } from "../context";

const SingleCard = ({ card }) => {
  const { handleChoice } = useGlobalContext();

  function handleClick() {
    handleChoice(card);
  }

  return (
    <>
      <li {...(card.matched && { className: "flipped" })}>
        <img src={card.src} alt="" className="front" />
        <img src="img/cover.png" alt="Cover Image" className="back" onClick={handleClick} />
      </li>
    </>
  );
};

export default SingleCard;
