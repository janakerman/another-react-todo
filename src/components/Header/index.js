import React from 'react';
import './Header.css';

const Header = ({title = ""}) => (
    <nav className="app-header">
          <h1>{title}</h1>
    </nav>
)

export default Header;
