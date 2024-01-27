import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Router from './components/Router/Router';
// import Link from './components/Link/Link';
import MaterialsSection from './components/MaterialsSection/MaterialsSection';
// import { NavigationProvider } from './context/navigation';
import HomePage from './components/Home/HomePage';
import AsokanPage from './components/Participants/Asokan/AsokanPage';
// import GeethuPage from './components/Participants/Asokan/GeethuPage';
// import KarenPage from './components/Participants/Asokan/KarenPage';
// import MamadouPage from './components/Participants/Asokan/MamadouPage';


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

  const participantList = [
    'Asokan',
    // 'Geethu',
    // 'Karen',
    // 'Mamadou',
  ]

  const participantLinks = participantList.map(item => {
    return (
      <div key={item}>Link Here</div>
      // <Link
      //   key={item}
      //   destination={`/${item.toLowerCase}`}
      // >
      //   <h3>{item}</h3>
      // </Link>
    )
  })



  return (
    <div>
      <h1>App Running</h1>

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/asokan" element={<AsokanPage />} />
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
