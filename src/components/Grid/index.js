import Card from "../Card";

export default function Grid({ cardsData, handleCardClick, matchedCards }) {
  return (
    <div className="grid-container">
      {cardsData.map((card) => {
        const isOpen =
          matchedCards.findIndex(
            (matchedCard) => matchedCard.uniqueKey === card.uniqueKey
          ) >= 0;
        return (
          <Card
            card={card}
            key={card.uniqueKey}
            handleCardClick={handleCardClick}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
}
