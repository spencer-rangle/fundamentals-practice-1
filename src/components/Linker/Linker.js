import React from 'react'
import { NavLink } from 'react-router-dom'

const Linker = ({ destination, children }) => {
  return (
    // <div href={destination} onClick={handleClick}>
    <NavLink
      to={destination}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-300 dark:border-gray-500 dark:hover:bg-aqua-700"
    >
      {children}
    </NavLink>
  )
}

export default Linker
