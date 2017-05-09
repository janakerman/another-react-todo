import React from 'react';

const panel = ({children, clicked}) => (
    <div className="panel panel-default" onClick={clicked}>
        <div className="panel-body">
            {children}
        </div>
    </div>
);

export default panel;
