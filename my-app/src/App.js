import React, { useState } from 'react';
import './App.css';

import Display from './components/display';
import Dashboard from './components/dashboard';

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Dashboard strikes={strikes} balls={balls} setStrikes={setStrikes} setBalls={setBalls} />
    </div>
  );
}

export default App;