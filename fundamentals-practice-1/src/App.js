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

// Sections
import DataTypesPage from "./components/MaterialsSection/DataTypes/DataTypes";
import NormalFunctionPage from "./components/MaterialsSection/NormalFunctionPage/NormalFunctionPage";
import ArrowFunctionPage from "./components/MaterialsSection/ArrowFunctionPage/ArrowFunctionPage";
import IfStatementPage from "./components/MaterialsSection/IfStatementPage/IfStatementPage";
import ForLoopPage from "./components/MaterialsSection/ForLoopPage/ForLoopPage";
import ForEachPage from "./components/MaterialsSection/ForEachPage/ForEachPage";
import MapLoopPage from "./components/MaterialsSection/MapLoopPage/MapLoopPage";
import ReducePage from "./components/MaterialsSection/ReducePage/ReducePage";


const App = () => {

  const participantList = [
    'Asokan',
    'Geethu',
    'Karen',
    'Mamadou',
  ]

  const participantLinks = participantList.map(item => {

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
        {/* <Route path="/asokan" element={<AsokanPage />} />
        <Route path="/geethu" element={<GeethuPage />} />
        <Route path="/karen" element={<KarenPage />} />
        <Route path="/mamadou" element={<MamadouPage />} /> */}
        {/* <Route path="/data-types" element={<DataTypesPage />} />
        <Route path="/normal-function" element={<NormalFunctionPage />} />
        <Route path="/arrow-fuction" element={<ArrowFunctionPage />} />
        <Route path="/if-statement" element={<IfStatementPage />} />
        <Route path="/for-loop" element={<ForLoopPage />} />
        <Route path="/for-each" element={<ForEachPage />} />
        <Route path="/map-loop" element={<MapLoopPage />} />
        <Route path="/reduce" element={<ReducePage />} /> */}
      </Routes>


      <h2>Materials</h2>
      <MaterialsSection />

      <h2 style={{marginTop: '200px'}}>Parcipants</h2>
      {participantLinks}

    </div>
  )
}

export default App;
