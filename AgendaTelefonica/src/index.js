import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const persons =  [
  {
    "id": 1,
    "name": "Juan",
    "number":33333
    
  },
  {
    "id": 2,
    "name": "Julio",
    "number":33323
   
  },
  {
    "id": 3,
    "name": "Julia",
    "number":33333
   
  }
]
ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

