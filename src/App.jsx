// import { useState, useEffect } from 'react'
import { Route, Router, Routes } from 'react-router'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  )
}

export default App
