import { useGlobalContext } from "../context";

const SingleCard = ({ card }) => {
  const { handleChoice, choiceOne, choiceTwo, disabled } = useGlobalContext();

  function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }

  function flipCard() {
    return card === choiceOne || card === choiceTwo || card.matched;
  }

  return (
    <>
      <li {...(flipCard() && { className: "flipped" })}>
        <img src={card.src} alt="" className="front" />
        <img src="img/cover.png" alt="Cover Image" className="back" onClick={handleClick} />
      </li>
    </>
  );
};

export default SingleCard;
