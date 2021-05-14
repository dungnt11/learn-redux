import React from 'react';
import { Counter } from './features/counter/Counter';
import { Header } from './features/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Header />
    </div>
  );
}

export default App;
