import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Location from './pages/Location/Location'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import "@fontsource/montserrat"
import ErrorPage from './pages/ErrorPage/ErrorPage'

 
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location/:id" element={<Location />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
