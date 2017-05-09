import React from 'react';
import TodoGridTile from '../TodoGridTile'

const TodoGrid = ({todoLists = []}) => (
    <ul>
        {todoLists.map((list, i) => 
            <li key={i}>
                <TodoGridTile title={list.title} />
            </li>
        )}
    </ul>
)

export default TodoGrid