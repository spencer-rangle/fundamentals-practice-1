import React from 'react'

import DropDown from '../DropDown/DropDown'

export function Header(props) {
  return (
    <>
      {/* header */}
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        {/* 
          on click open drawer/dropdown with list of menu list items
          create the drawer/dropdown
          make the dropdown appear over other components
        */}
        <DropDown
          isNavOpen={props.isNavOpen}
          setIsNavOpen={props.setIsNavOpen}
        />
      </nav>
      <hr />
    </>
  )
}
export default Header
