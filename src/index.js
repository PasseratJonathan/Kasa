import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/A-Propos'
import Error from './pages/Error'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} /> 
        <Route path="*" element={<Error />} />       
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();
