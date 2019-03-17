import React from 'react';

import './styles.css';

const Header = (props) => {
  const { title } = props;
  return (
    <div className="Header">{title}</div>
  )
}

export default Header;