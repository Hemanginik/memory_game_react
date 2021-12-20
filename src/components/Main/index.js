import { useEffect, useState } from "react";
import { createCardsData } from "../../utils/helper";
import Grid from "../Grid";
import Header from "../Header";

export default function Main() {
  const [cardsData, setCardsData] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const getData = () => {
      const data = createCardsData(16);
      setCardsData(data);
    };
    getData();
  }, []);

  const checkInitialCondition = (currentCardId, uniqueKey) => {
    if (matchedCards.length === 0) {
      setMatchedCards([
        {
          id: currentCardId,
          isMatched: false,
          uniqueKey: uniqueKey,
        },
      ]);
      return true;
    } else {
      const isCardAlreadyPresent = matchedCards.findIndex((card) => {
        return (
          card.uniqueKey === uniqueKey ||
          (card.isMatched && card.id === currentCardId)
        );
      });
      return isCardAlreadyPresent >= 0;
    }
  };

  const setIfCardMatched = (currentCardId, uniqueKey) => {
    let matchedIndex = matchedCards.findIndex((card) => {
      if (card.id === currentCardId && card.isMatched === false) {
        return true;
      }
      return false;
    });
    if (matchedIndex >= 0) {
      setMatchedCards((prevState) => {
        const tempCards = [...prevState];
        tempCards[matchedIndex].isMatched = true;
        return [
          ...tempCards,
          { id: currentCardId, isMatched: true, uniqueKey },
        ];
      });
    } else {
      const isMatchFalse = matchedCards.findIndex((card) => !card.isMatched);
      if (isMatchFalse >= 0) {
        //open the clicked card for 0.5 sec
        setMatchedCards((prevState) => [
          ...prevState,
          {
            id: currentCardId,
            isMatched: false,
            uniqueKey: uniqueKey,
          },
        ]);
        //removing the unmatched cards
        setTimeout(() => {
          setMatchedCards((prevState) => [
            ...prevState.filter((card) => card.isMatched),
          ]);
        }, 0.5 * 1000);
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

  const handleReset = () => {
    setMatchedCards([]);
  };

  const handleCardClick = (currentCardId, uniqueKey) => {
    console.log(currentCardId);
    if (!checkInitialCondition(currentCardId, uniqueKey)) {
      setIfCardMatched(currentCardId, uniqueKey);
    }
  };

  return (
    <>
      <Header handleResetBtnClick={handleReset} />
      <div className="container">
        <Grid
          cardsData={cardsData}
          handleCardClick={handleCardClick}
          matchedCards={matchedCards}
        />
      </div>
    </>
  );
}
