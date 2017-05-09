import React from 'react';

import TodoItem from '../TodoItem';

const TodoList = ({todoList}) => {

    if (!todoList) {
        return null;
    }
    
    return (
        <div>
            <h1>{todoList.title}</h1>
            {todoList.items.map(todo => <TodoItem key={todo.id} item={todo} />)}
        </div>
    );
};

export default TodoList;
