import { Link } from 'react-router-dom'
import Logo from '../assets/images/ALBA Logo RGB.png'

export default function HomePage() {
  return (
    <>
    <h1>Alba Berlin Memory Game</h1>
    <img className='logo' src={Logo} alt='Alba Berlin Logo'/>
    <button><Link to={'/game'}>Start Game</Link></button>
    </>
  )
}
