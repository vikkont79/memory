import { useState } from "react";

const useGame = (images) => {
  const [finishedItems, setFinishedItems] = useState([])
  const [stepsCount, setStepsCount] = useState(0);

  const checkItems = (firstItem, secondItem) => {
    const firstImage = images.find((item) => item.id === firstItem);
    const secondImage = images.find((item) => item.id === secondItem);
    if (firstImage.url === secondImage.url) {
      setFinishedItems((state) => [...state, firstItem, secondItem]);
    }
    setStepsCount((state) => state + 1);
  };

  const isGameOver = finishedItems.length > 0 && finishedItems.length === images.length;

  return {
    finishedItems,
    stepsCount,
    checkItems,
    isGameOver,
  }
};

export { useGame };