import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Button } from './components/Button';
const rootElement = document.getElementById('root');
const xx =  <App><div>abc</div></App>;
console.log(xx)
ReactDOM.render(
   xx,rootElement
);
