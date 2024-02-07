import { Route, Routes } from 'react-router-dom'

// Sections
import DataTypesPage from './DataTypes/DataTypes'
import NormalFunctionPage from './NormalFunctionPage/NormalFunctionPage'
import ArrowFunctionPage from './ArrowFunctionPage/ArrowFunctionPage'
import IfStatementPage from './IfStatementPage/IfStatementPage'
import ForLoopPage from './ForLoopPage/ForLoopPage'
import ForEachPage from './ForEachPage/ForEachPage'
import MapLoopPage from './MapLoopPage/MapLoopPage'
import ReducePage from './ReducePage/ReducePage'
import PrototypePage from './Prototypes/Prototypes'

// import Link from '../Link/Link';
import Linker from '../Linker/Linker'

const materialItems = [
  { label: 'data types', destination: '/data-types' },
  { label: 'function', destination: '/normal-function' },
  { label: 'arrow function =>', destination: '/arrow-fuction' },
  { label: 'if, if else, else', destination: '/if-statement' },
  { label: 'for', destination: '/for-loop' },
  { label: '.forEach', destination: '/for-each' },
  { label: '.map', destination: '/map-loop' },
  { label: '.reduce', destination: '/reduce' },
  { label: 'Prototype', destination: '/prototype' },
]

const materialLinks = materialItems.map((item) => {
  console.log('materials')
  console.log(item)
  return (
    <Linker key={item.label} destination={item.destination}>
      <div>{item.label}</div>
    </Linker>
  )
})

const MaterialsSection = () => {
  return (
    <div className="grid grid-cols-4 gap-4 align-start justify-center h-56 p-10">
      {materialLinks}
    </div>
  )
}

export default MaterialsSection
