import React from 'react';

const TileGrid = ({items = [], titleSelector = () => {}, itemClicked = () => {}}) => (
    <ul>
        {items.map((item, i) => 
            <li key={i}>
                <h1 onClick={() => itemClicked(i)}>{titleSelector(item)}</h1>
            </li>
        )}
    </ul>
);

export default TileGrid;
