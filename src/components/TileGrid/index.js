import React from 'react';

import './TileGrid.css';

import Panel from '../Panel';

const TileGrid = ({items = [], titleSelector = () => {}, itemClicked = () => {}}) => (    
    <div>
        <h1 className="text-center">My Lists</h1>
        <div className="tile-grid">
            {items.map((item, i) => 
                <Panel key={i} clicked={() => itemClicked(i)}>
                    <h1>{titleSelector(item)}</h1>
                </Panel>
            )}
        </div>
    </div>
);

export default TileGrid;
