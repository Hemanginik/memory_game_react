import Card from "../Card";

export default function Grid({ cardsData, handleCardClick }) {
  return (
    <div className="grid-container">
      {cardsData.map((card) => {
        return (
          <Card
            card={card}
            key={card.uniqueKey}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </div>
  );
}
