import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import  {Button}  from './components/BtnClass';
import { BtnFn } from './components/BtnFn';
import { List } from './components/List';

function App() {
  const [name,setName] = useState("小花");
  console.log("--App----")
  return (
    <div className="App">
      <Button></Button>
      <BtnFn>
        {/**该节点不会重复渲染 */ }
        <List></List>
      </BtnFn>
     
    </div>
  );
}

export default App;
