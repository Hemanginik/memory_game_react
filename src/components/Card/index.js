export default function Card({ card, handleCardClick, isOpen }) {
  const { id, url, uniqueKey } = card;
  const openedCard = (
    <div
      className="avatar-card"
      onClick={(e) => handleCardClick(id, uniqueKey)}
    >
      <img src={url} height="auto" width={96} alt="Avatar" />
    </div>
  );
  const closedCard = (
    <div
      className="avatar-card"
      onClick={(e) => handleCardClick(id, uniqueKey)}
    ></div>
  );
  if (isOpen) {
    return openedCard;
  } else {
    return closedCard;
  }
}
