import { Route, Routes } from 'react-router-dom';

// Sections
import DataTypesPage from "./DataTypes/DataTypes";
import NormalFunctionPage from "./NormalFunctionPage/NormalFunctionPage";
import ArrowFunctionPage from "./ArrowFunctionPage/ArrowFunctionPage";
import IfStatementPage from "./IfStatementPage/IfStatementPage";
import ForLoopPage from "./ForLoopPage/ForLoopPage";
import ForEachPage from "./ForEachPage/ForEachPage";
import MapLoopPage from "./MapLoopPage/MapLoopPage";
import ReducePage from "./ReducePage/ReducePage";


// import Link from '../Link/Link';
import Linker from "../Linker/Linker";


const materialItems = [
  {label: 'data types', destination: '/data-types'},
  {label: 'function', destination: '/normal-function'},
  {label: 'arrow funcion =>', destination: '/arrow-fuction'},
  {label: 'if, if else, else', destination: '/if-statement'},
  {label: 'for', destination: '/for-loop'},
  {label: '.forEach', destination: '/for-each'},
  {label: '.map', destination: '/map-loop'},
  {label: '.reduce', destination: '/reduce'},
]

const materialLinks = materialItems.map(item => {
  console.log('materials');
  console.log(item);
  return (
    // <div key={item.key}>Link for here</div>
    <Linker
      key={item.label}
      destination={item.destination}
    >
    <h3>{item.label}</h3>
  </Linker>
  );
});

const MaterialsSection = () => {
  return (
    <div>
      {materialLinks}
    </div>
  )
}

export default MaterialsSection;



// data types

// function
// arrow funcion =>

// if, if else, else

// for
// .forEach
// .map

// .reduce





