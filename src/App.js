import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import  {Button}  from './components/Button';
import { List } from './components/List';

function App() {
  const [name,setName] = useState("小花");
  
  return (
    <div className="App">
      {name}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button></Button>
      <List></List>
     
    </div>
  );
}

export default App;
