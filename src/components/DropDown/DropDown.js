import React, { useState } from 'react'
import './DropDown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const DropDown = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false
  const toggleMenu = (event) => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <section className="MOBILE-MENU flex lg:hidden">
        <FontAwesomeIcon
          icon={isNavOpen ? faClose : faBars}
          className="lg:hidden block mt-4 text-teal-50 hover:text-teal-950 mr-4I"
          onClick={toggleMenu}
        />
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div
            className={
              isNavOpen
                ? 'showMenuNav flex items-center justify-between flex-wrap bg-teal-500 p-6'
                : 'hideMenuNav'
            }
          >
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li>
                <NavLink
                  to="./"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-teal-950 mr-4"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="./Login"
                  id="login"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-teal-950 mr-4"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <li>
          <NavLink
            to="./"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-teal-950 mr-4"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./Login"
            id="login"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-teal-950 mr-4"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default DropDown
