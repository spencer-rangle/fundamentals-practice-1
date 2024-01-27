// import Link from '../Link/Link';
import Linker from "../Linker/Linker";

const materialItems = [
  {label: 'data types', desitination: '/data-types'},
  {label: 'function', desitination: '/normal-function'},
  {label: 'arrow funcion =>', desitination: '/arrow-fuction'},
  {label: 'if, if else, else', desitination: '/if-statement'},
  {label: 'for', desitination: '/for-loop'},
  {label: '.forEach', desitination: '/for-each'},
  {label: '.map', desitination: '/map-loop'},
  {label: '.reduce', desitination: '/reduce'},
]

const materialLinks = materialItems.map(item => {
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





