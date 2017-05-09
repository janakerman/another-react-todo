import React from 'react';

import './List.css';

const List = ({title = '', items = []}) => (
        <div>
            <h1 className="text-center">{title}</h1>
            <div className="list-group">
                {items.map(item => 
                    <div className="list-group-item" key={item.id}>{item.title}</div>)}
            </div>
        </div>
);

export default List;
