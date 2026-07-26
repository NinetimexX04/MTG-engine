import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import Header from './components/Header'
import Home from './components/Home'
import ChooseDeck from './components/ChooseDeck'
import Lobby from './components/Lobby'

function App() {

  return (
    <div className='app-container'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/choose-deck' element={<ChooseDeck />} />
            <Route path='/lobby' element={<Lobby />} />
          </Routes>
        </main>
    </div>
  )
}

export default App
