import React from 'react';

import './App.css';
import Calculator from './components/Calculater';
import NumberProvider from './components/NumberProvider';

function App() {
  return (
    <div className="wrapper">
      <NumberProvider>
        <Calculator/>
      </NumberProvider>
    </div>
  );
}

export default App;
