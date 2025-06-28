import React from 'react';
import { useState } from "react";
import { TIMEOUT } from "../../settings";
import { Card } from "../card/card.jsx";


function CardsList({ images = [], finishedItems = [], type, checkItems }) {
      const [visibleItems, setVisibleItems] = useState([]);
      const handleCardClick = (id) => {
        if (visibleItems.includes(id)) {
          return
        }
        switch (visibleItems.length) {
          case 0:
            setVisibleItems([id]);
            break;
          case 1:
            const firstId = visibleItems[0];
            setVisibleItems((state) => [...state, id]);
            checkItems(firstId, id);
            setTimeout(() => {
              setVisibleItems([])
            }, TIMEOUT);
            break;
          default:
            setVisibleItems([])
        }
      };

      return (
        <ul className={`cards cards-theme-${type}`}>
          {images.map((item) => (
            <Card
              key={item.id}
              {...item}
              isShown={visibleItems.includes(item.id)}
              isFinished={finishedItems.includes(item.id)}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      );
    }

    export { CardsList };

    