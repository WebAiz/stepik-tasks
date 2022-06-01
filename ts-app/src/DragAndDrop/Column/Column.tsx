import type {Identifier, XYCoord} from 'dnd-core';
import type {ChangeEvent, FC} from 'react';
import React, {useCallback, useRef, useState} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import './Column.css';

import {ItemTypes} from '../ItemTypes';
import update from 'immutability-helper';
import {Card} from '../Card';

export interface ColumnProps {
  id: any;
  title: string;
  index: number;
  moveColumn: (dragIndex: number, hoverIndex: number) => void;
}

export interface CardItem {
  id: number;
  text: string;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const Column: FC<ColumnProps> = ({ id, index, title, moveColumn }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<DragItem,
    void,
    { handlerId: Identifier | null }>({
    accept: ItemTypes.COLUMN,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get horizontal middle
      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientX = (clientOffset as XYCoord).x - hoverBoundingRect.left;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      // Time to actually perform the action
      moveColumn(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
  ]);
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: CardItem[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as CardItem],
        ],
      }),
    );
  }, []);

  const handleCardChange = (e: ChangeEvent, id: number) => {
    const target = e.target as HTMLInputElement;
    const text = target.value;
    const card = cards.find((el) => el.id === id);
    if (card) card.text = text;
    setCards([...cards]);
  };

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
          handleCardChange={handleCardChange}
        />
      );
    },
    [],
  );

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.COLUMN,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div className="column" ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <h2>{title}</h2>
      <div className="column" style={{ opacity }}>{cards.map((card, i) => renderCard(card, i))}</div>
    </div>
  );
};

export default Column;
