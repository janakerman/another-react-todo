import React from 'react';
import './App.css';

import TodoGrid from '../TodoGrid';
import Header from '../Header';

const App = ({title = "", todoLists = []}) => (
  <div className="app">
    <Header title={title} />
    <TodoGrid todoLists={todoLists} />
  </div>
)

export default App;
