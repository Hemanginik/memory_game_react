export default function Card({ card, handleCardClick }) {
  const { id, url, uniqueKey } = card;
  return (
    <div
      className="avatar-card"
      onClick={(e) => handleCardClick(id, uniqueKey)}
    >
      <img src={url} height="auto" width={96} alt="Avatar" />
    </div>
  );
}
