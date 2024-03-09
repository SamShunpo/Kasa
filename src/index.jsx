import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Location from './pages/Location/Location'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import "@fontsource/montserrat"

 
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Location" element={<Location />} />
                <Route path="/About" element={<About />} />
            </Routes>
                  </Router>
    </React.StrictMode>,
)
