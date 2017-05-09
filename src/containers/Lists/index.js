import React from 'react';
import TodoGrid from '../../components/TodoGrid';

const todoLists = [
  {
    id: 1,
    title: 'Shopping List'
  },
  {
    id: 2,
    title: 'Getting Dressed'
  },
  {
    id: 3,
    title: 'Refresh React'
  }
];

const Lists = () => (
    <TodoGrid todoLists={todoLists} />
);

export default Lists;
