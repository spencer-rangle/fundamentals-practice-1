// import { NavigationProvider } from './context/navigation';
// import Router from './components/Router/Router';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import MaterialsSection from './components/MaterialsSection/MaterialsSection';
import HomePage from './components/Home/HomePage';
import Linker from './components/Linker/Linker';
import Button from './components/Button/Button';
import { ButtonTypesEnum, ButtonShapesEnum, ButtonSizesEnum } from './components/Button/Button';

// Participants
import AsokanPage from './components/Participants/Asokan/AsokanPage';
import GeethuPage from './components/Participants/Geethu/GeethuPage';
import KarenPage from './components/Participants/Karen/KarenPage';
import MamadouPage from './components/Participants/Mamadou/MamadouPage';

// MaterialsSection
import DataTypesPage from "./components/MaterialsSection/DataTypes/DataTypes";
import NormalFunctionPage from "./components/MaterialsSection/NormalFunctionPage/NormalFunctionPage";
import ArrowFunctionPage from "./components/MaterialsSection/ArrowFunctionPage/ArrowFunctionPage";
import IfStatementPage from "./components/MaterialsSection/IfStatementPage/IfStatementPage";
import ForLoopPage from "./components/MaterialsSection/ForLoopPage/ForLoopPage";
import ForEachPage from "./components/MaterialsSection/ForEachPage/ForEachPage";
import MapLoopPage from "./components/MaterialsSection/MapLoopPage/MapLoopPage";
import ReducePage from "./components/MaterialsSection/ReducePage/ReducePage";


const App = () => {

  const handleHomeClick = (event) => {
    console.log('Back to Home');
    console.log(window.location);
    window.location = 'http://localhost:3000/'
  }


  return (
    <div>
      <h1>App Running</h1>
      {/* onClick={(event) => { handleHomeClick(event) }} */}
      <Button
        type={ButtonTypesEnum.primary}
        shape={ButtonShapesEnum.rounded}
        size={ButtonSizesEnum.big}
        border={true}
        hollow={false}
        gradient={true}
        shadow={true}
      >
          {/* Home */}
        <Linker
          key="home"
          destination="./"
        >
          Home
        </Linker>
      </Button>


      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/asokan" element={<AsokanPage />} />
        <Route path="/geethu" element={<GeethuPage />} />
        <Route path="/karen" element={<KarenPage />} />
        <Route path="/mamadou" element={<MamadouPage />} />
        <Route path="/data-types" element={<DataTypesPage />} />
        <Route path="/normal-function" element={<NormalFunctionPage />} />
        <Route path="/arrow-fuction" element={<ArrowFunctionPage />} />
        <Route path="/if-statement" element={<IfStatementPage />} />
        <Route path="/for-loop" element={<ForLoopPage />} />
        <Route path="/for-each" element={<ForEachPage />} />
        <Route path="/map-loop" element={<MapLoopPage />} />
        <Route path="/reduce" element={<ReducePage />} />
      </Routes>

    </div>
  )
}

export default App;
