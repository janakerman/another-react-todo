import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const title = "React Todo!";
const todoLists = [
  {
    title: 'Shopping List'
  },
  {
    title: 'Getting Dressed'
  },
  {
    title: 'Refresh React'
  }
];

ReactDOM.render(
  <App title={title} todoLists={todoLists} />,
  document.getElementById('root')
);
