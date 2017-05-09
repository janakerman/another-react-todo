import React from 'react';

const List = ({title = '', items = []}) => (
        <div>
            <h1>{title}</h1>
            <ul>
                {items.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
);

export default List;
