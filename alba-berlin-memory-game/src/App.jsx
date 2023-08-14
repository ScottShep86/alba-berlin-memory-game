import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import GameScreen from './pages/GameScreen';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/game' element={<GameScreen/>}/>
    </Routes>
  )
}

export default App
