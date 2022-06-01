import React from 'react';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragAndDrop from './Home';
import {DndProvider} from 'react-dnd';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <DndProvider backend={HTML5Backend}>
          <DragAndDrop />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
