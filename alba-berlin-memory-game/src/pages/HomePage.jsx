import { Link } from 'react-router-dom';
import Logo from '../assets/images/ALBA Logo RGB.png';
import kidsZone from '../assets/images/kids zone.png';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function HomePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="pageView">
        <Link
          to="https://www.albaberlin.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={Logo} alt="Alba Berlin Logo" />
        </Link>
        <img className="kidsZone" src={kidsZone} alt="Alba Kids Zone" />
        {/* <Link className="link" to={'/game'}>
          <button>MEMORY SPIEL</button>
        </Link>
        <Link className="link" to={'/albabet'}>
          <button>ALBA ABC</button>
        </Link> */}
      </div>

      <Footer />
    </>
  );
}
