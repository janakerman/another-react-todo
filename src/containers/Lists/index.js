import React from 'react';
import TodoGrid from '../../components/TodoGrid';
import todoLists from '../../services/todoLists';

const Lists = () => (
    <TodoGrid todoLists={todoLists.get()} />
);

export default Lists;
