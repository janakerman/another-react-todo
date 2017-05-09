import React from 'react';
import './Header.css';

const Header = ({title = ""}) => (
    <div className="app-header">
          <h1>{title}</h1>
    </div>
)

export default Header;
