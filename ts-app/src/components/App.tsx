import React from 'react';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragAndDrop from '../DragAndDrop';
import {DndProvider} from 'react-dnd';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <DragAndDrop/>
      </DndProvider>
    </div>
  );
}

export default App;
