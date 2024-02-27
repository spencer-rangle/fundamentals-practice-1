import React from 'react'
import './DropDown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const DropDown = (props) => {
  const toggleMenu = (isOpenOrClose) => {
    props.setIsNavOpen(isOpenOrClose)
  }

  return (
    <>
      <section className="MOBILE-MENU flex lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden absolute top-5 right-5 block mt-4 text-teal-50 hover:text-teal-950 mr-4I size-10"
          onClick={() => {
            toggleMenu(true)
          }}
        />
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div
            className={
              props.isNavOpen
                ? 'showMenuNav flex items-center justify-between flex-wrap bg-teal-500 p-6'
                : 'hideMenuNav'
            }
          >
            <FontAwesomeIcon
              icon={faClose}
              className="absolute top-10 right-5 size-10 lg:hidden block text-teal-50 hover:text-teal-950"
              onClick={() => {
                toggleMenu(false)
              }}
            />

            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li>
                <NavLink
                  to="./"
                  className="block mt-4 size-10 lg:inline-block lg:mt-0 text-teal-50 hover:text-teal-950 mr-4"
                  onClick={() => {
                    toggleMenu(false)
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="./Login"
                  id="login"
                  className="block mt-4 size-10 lg:inline-block lg:mt-0 text-teal-50 hover:text-teal-950 mr-4"
                  onClick={() => {
                    toggleMenu(false)
                  }}
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
    </>
  )
}

export default DropDown
