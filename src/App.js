// import { NavigationProvider } from './context/navigation';
// import Router from './components/Router/Router';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Home/HomePage'

// Participants
import AsokanPage from './components/Participants/Asokan/AsokanPage'
import GeethuPage from './components/Participants/Geethu/GeethuPage'
import KarenPage from './components/Participants/Karen/KarenPage'
import MamadouPage from './components/Participants/Mamadou/MamadouPage'

// MaterialsSection
import DataTypesPage from './components/MaterialsSection/DataTypes/DataTypes'
import NormalFunctionPage from './components/MaterialsSection/NormalFunctionPage/NormalFunctionPage'
import ArrowFunctionPage from './components/MaterialsSection/ArrowFunctionPage/ArrowFunctionPage'
import IfStatementPage from './components/MaterialsSection/IfStatementPage/IfStatementPage'
import ForLoopPage from './components/MaterialsSection/ForLoopPage/ForLoopPage'
import ForEachPage from './components/MaterialsSection/ForEachPage/ForEachPage'
import MapLoopPage from './components/MaterialsSection/MapLoopPage/MapLoopPage'
import ReducePage from './components/MaterialsSection/ReducePage/ReducePage'
import PrototypePage from './components/MaterialsSection/Prototypes/Prototypes'
import { Header } from './components/Header/Header'
import StorybookPage from './components/MaterialsSection/StorybookPage/StorybookPage'
import TailwindPage from './components/MaterialsSection/TailwindPage/TailwindPage'

const App = () => {
  return (
    <>
      <Header />
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
        <Route path="/prototype" element={<PrototypePage />} />
        <Route path="/storybook" element={<StorybookPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
      </Routes>
    </>
  )
}

export default App
