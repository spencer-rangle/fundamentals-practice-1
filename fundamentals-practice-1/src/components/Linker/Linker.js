import React from 'react';
import { Link } from 'react-router-dom';

const Linker = ({ destination, children }) => {

  return (
    // <div href={destination} onClick={handleClick}>
    <Link to={destination}>
      {children}
    </Link>
  );
}

export default Linker;
