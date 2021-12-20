import { v4 as uuidv4 } from "uuid";
const AVATAR_URL = "https://avatars.dicebear.com/api/avataaars/";

const getUrl = (index) => {
  return `${AVATAR_URL}${index}.svg`;
};

const getShuffledData = (cardsArray) => {
  let currentIndex = cardsArray.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [cardsArray[currentIndex], cardsArray[randomIndex]] = [
      cardsArray[randomIndex],
      cardsArray[currentIndex],
    ];
  }

  const data = cardsArray.map((card) => {
    let key = uuidv4();
    return { ...card, uniqueKey: key };
  });

  return data;
};

export const createCardsData = (noOfCards) => {
  const uniqueCards = noOfCards / 2;
  const data = [...Array(uniqueCards)].map((_, index) => {
    return {
      id: index,
      url: getUrl(index),
    };
  });
  return getShuffledData([...data, ...data]);
};
