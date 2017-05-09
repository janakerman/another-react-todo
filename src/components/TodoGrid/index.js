import React from 'react';
import { Link } from 'react-router-dom';

import TodoGridTile from '../TodoGridTile';

const TodoGrid = ({todoLists = []}) => (
    <ul>
        {todoLists.map(list => 
            <li key={list.id}>
                <Link to={`/list/${list.id}`}>
                    <TodoGridTile title={list.title} />
                </Link>
            </li>
        )}
    </ul>
);

export default TodoGrid;
