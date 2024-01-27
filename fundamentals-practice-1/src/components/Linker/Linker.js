import React from 'react';
import { Link } from 'react-router-dom';


const Linker = ({ destination, children }) => {
  // const { navigate, currentPath } = useContext(NavigationContext);

  // From navigation?
  // const navigate = (destinationPath) => {
  //   window.history.pushState({}, '', destinationPath);
  //   setCurrentPath(destinationPath);
  // };

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    console.log(event)
    navigate(destination);
  }

  return (
    // <div href={destination} onClick={handleClick}>
    <Link to={destination}>
      {children}
    </Link>
  );
}

export default Linker;
