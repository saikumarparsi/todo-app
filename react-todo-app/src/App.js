import React from 'react';
import Todos from './components/Todos/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="app-heading">Todo Application</h1>
      <Todos />
    </div>
  );
}

export default App;
