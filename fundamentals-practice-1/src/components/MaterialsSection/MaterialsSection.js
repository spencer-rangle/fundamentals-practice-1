// import Link from '../Link/Link';

const materialItems = [
  {key: 'data types', label: 'data types', desitination: '/data-types'},
  {key: 'function', label: 'function', desitination: '/normal-function'},
  {key: 'arrow funcion =>', label: 'arrow funcion =>', desitination: '/arrow-fuction'},
  {key: 'if, if else, else', label: 'if, if else, else', desitination: '/if-statement'},
  {key: 'for', label: 'for', desitination: '/for-loop'},
  {key: '.forEach', label: '.forEach', desitination: '/for-each'},
  {key: '.map', label: '.map', desitination: '/map-loop'},
  {key: '.reduce', label: '.reduce', desitination: '/reduce'},
]

const materialLinks = materialItems.map(item => {
  return (
    <div key={item.key}>Link for here</div>
  //   <Link
  //     key={item.key}
  //     destination={item.destination}
  //   >
  //   <h3>{item.label}</h3>
  // </Link>
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





