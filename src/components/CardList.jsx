import { useGlobalContext } from "../context";

import SingleCard from "./SingleCard";

const CardList = () => {
  const { cardList } = useGlobalContext();

  return (
    <>
      <ul className="card-list">
        {cardList.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </ul>
    </>
  );
};

export default CardList;
