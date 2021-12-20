import { useEffect, useState } from "react";
import { createCardsData } from "../../utils/helper";
import Grid from "../Grid";
import Header from "../Header";

export default function Main() {
  const [cardsData, setCardsData] = useState([]);
  const [matchedCard, setMatchedCards] = useState([]);
  // const [openCards, setOpenCards] = useState([]);

  useEffect(() => {
    const getData = () => {
      const data = createCardsData(16);
      setCardsData(data);
    };
    getData();
  }, []);

  const checkInitialCondition = (currentCardId, uniqueKey) => {
    if (matchedCard.length === 0) {
      setMatchedCards([
        {
          id: currentCardId,
          isMatched: false,
          uniqueKey: uniqueKey,
        },
      ]);
      return true;
    } else {
      const isCardAlreadyPresent = matchedCard.findIndex((card) => {
        return (
          card.uniqueKey === uniqueKey ||
          (card.isMatched && card.id === currentCardId)
        );
      });
      return isCardAlreadyPresent >= 0;
    }
  };

  const setIfCardMatched = (currentCardId, uniqueKey) => {
    let matchedIndex = matchedCard.findIndex((card) => {
      if (card.id === currentCardId && card.isMatched === false) {
        return true;
      }
      return false;
    });
    if (matchedIndex >= 0) {
      setMatchedCards((prevState) => {
        const tempCards = [...prevState];
        tempCards[matchedIndex].isMatched = true;
        return [...tempCards];
      });
    } else {
      const isMatchFalse = matchedCard.findIndex((card) => !card.isMatched);
      if (isMatchFalse >= 0) {
        setMatchedCards((prevState) => [
          ...prevState.filter((card) => card.isMatched),
        ]);
      } else {
        setMatchedCards((prevState) => [
          ...prevState,
          {
            id: currentCardId,
            isMatched: false,
            uniqueKey: uniqueKey,
          },
        ]);
      }
    }
  };

  const handleCardClick = (currentCardId, uniqueKey) => {
    console.log(currentCardId);
    if (!checkInitialCondition(currentCardId, uniqueKey)) {
      setIfCardMatched(currentCardId, uniqueKey);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <Grid cardsData={cardsData} handleCardClick={handleCardClick} />
      </div>
    </>
  );
}
