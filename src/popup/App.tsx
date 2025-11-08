import React from 'react';
import Counter from './components/Counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Chrome Extension</h1>
      <Counter />
    </div>
  );
};

export default App;
