const SingleCard = ({ card }) => {
  return (
    <>
      <li>
        <img src={card.src} alt="" className="front" />
        <img src="img/cover.png" alt="" className="back" />
      </li>
    </>
  );
};

export default SingleCard;
