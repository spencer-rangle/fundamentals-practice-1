import './index.css'
import React from 'react'
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import { NavigationProvider } from './context/navigation';
import App from './App'

const elem = document.getElementById('root')
const root = createRoot(elem)

root.render(
  <Router>
    <App />
  </Router>
  // <NavigationProvider>
  // </NavigationProvider>
)
