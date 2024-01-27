import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Router from './components/Router/Router';
// import Link from './components/Link/Link';
import MaterialsSection from './components/MaterialsSection/MaterialsSection';
// import { NavigationProvider } from './context/navigation';
import HomePage from './components/Home/HomePage';
import Linker from './components/Linker/Linker';
import AsokanPage from './components/Participants/Asokan/AsokanPage';
import GeethuPage from './components/Participants/Geethu/GeethuPage';
import KarenPage from './components/Participants/Karen/KarenPage';
import MamadouPage from './components/Participants/Mamadou/MamadouPage';


const App = () => {


  // const routeList = [
  //   { path: '/asokan', componant: AsokanPage },
  //   { path: '/geethu', componant: GeethuPage },
  //   { path: '/karen', componant: KarenPage },
  //   { path: '/mamadou', componant: MamadouPage },
  //   // { path: '/asokan', componant: AsokanPage },
  //   // { path: '/asokan', componant: AsokanPage },
  //   // { path: '/asokan', componant: AsokanPage },
  // ]

  // const data = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   console.log('Pikachu Data:', data);
  // })
  // .catch(error => {
  //   console.error('Error fetching Pikachu data:', error);
  // });


  // {label: 'data types', desitination: '/data-types'},
  // {label: 'function', desitination: '/normal-function'},
  // {label: 'arrow funcion =>', desitination: '/arrow-fuction'},
  // {label: 'if, if else, else', desitination: '/if-statement'},
  // {label: 'for', desitination: '/for-loop'},
  // {label: '.forEach', desitination: '/for-each'},
  // {label: '.map', desitination: '/map-loop'},
  // {label: '.reduce', desitination: '/reduce'},



  const participantList = [
    'Asokan',
    'Geethu',
    'Karen',
    'Mamadou',
  ]

  const participantLinks = participantList.map(item => {

    console.log('ITEM');
    console.log(item);
    const lowercaseName = item.toLowerCase();

    return (
      <Linker
        key={item}
        destination={`/${item.toLowerCase()}`}
      >
        <h3>{item}</h3>
      </Linker>
    );
  });



  return (
    <div>
      <h1>App Running</h1>

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/asokan" element={<AsokanPage />} />
        <Route path="/geethu" element={<GeethuPage />} />
        <Route path="/karen" element={<KarenPage />} />
        <Route path="/mamadou" element={<MamadouPage />} />
      </Routes>

      <h2>Materials</h2>
      <MaterialsSection />

      <h2 style={{marginTop: '200px'}}>Parcipants</h2>
      {participantLinks}

    </div>
    // <NavigationProvider>
    // </NavigationProvider>
  )
}

export default App;
