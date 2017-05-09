import React from 'react';

import './List.css';

const List = ({title = '', items = []}) => (
        <div>
            <h1 className="text-center">{title}</h1>
            <div className="list-group">
                {items.map((item, i) => 
                    <div className="list-group-item" key={i}>{item.title}</div>)}
            </div>
        </div>
);

export default List;
