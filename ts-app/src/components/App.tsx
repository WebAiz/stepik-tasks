import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Board from './Board';
import Home from './Home';
import SimpleCard from './SimpleCard';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Board />} />
        <Route path='/:cardNumber' element={<SimpleCard />} />
        <Route path='/new' element={<SimpleCard />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
