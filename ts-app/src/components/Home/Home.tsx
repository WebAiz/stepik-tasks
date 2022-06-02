import update from 'immutability-helper';
import type {FC} from 'react';
import {useCallback, useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Column from '../Column';
import Sidebar from '../Sidebar';
import './Home.css';

export interface ColumnItem {
  id: number;
  title: string;
}

export interface ContainerState {
  columns: ColumnItem[];
}

export const Home: FC = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Write a cool JS library',
    },
    {
      id: 2,
      title: 'Make it generic enough',
    },
    {
      id: 3,
      title: 'Write README',
    },
  ]);

  const moveColumn = useCallback((dragIndex: number, hoverIndex: number) => {
    setColumns((prevColumns: ColumnItem[]) =>
      update(prevColumns, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevColumns[dragIndex] as ColumnItem],
        ],
      })
    );
  }, []);

  const renderColumn = useCallback(
    (column: {id: number; title: string}, index: number) => {
      return (
        <Column
          key={column.id}
          index={index}
          id={column.id}
          title={column.title}
          moveColumn={moveColumn}
        />
      );
    },
    []
  );

  return (
    <div className='container'>
      <Sidebar />
      <DndProvider backend={HTML5Backend}>
        <div className={'home'}>
          {columns.map((col, i) => renderColumn(col, i))}
        </div>
      </DndProvider>
    </div>
  );
};
