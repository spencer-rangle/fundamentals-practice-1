import React from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <>
      {/* header */}
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <NavLink
          to="./"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Home
        </NavLink>
        <NavLink
          to="./Login"
          id="login"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Login
        </NavLink>
      </nav>
      <hr />
    </>
  )
}
export default Header
