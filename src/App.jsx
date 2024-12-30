import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom'
import Home from './HomePage'
import About from './About'
import Services from './Services'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
