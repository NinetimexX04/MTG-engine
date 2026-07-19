import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
        <Header />
        <main>
          <Card url='https://cards.scryfall.io/normal/front/f/3/f353281a-0e56-448f-b41a-beb3949c5f11.jpg?1783928301' name='Twinblade Assassins'/>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default App
