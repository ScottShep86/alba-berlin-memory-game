import { Link } from 'react-router-dom';
import Logo from '../assets/images/ALBA Logo RGB.png';
import kidsZoneB from '../assets/images/kids zone blue.png';
import AusmalbildButton from './AusmalbildButton';

export default function Navbar() {
  return (
    <header className="navbar">
      {/* <div>
        <iframe
          src="https://hub.euroleague.net/topbarpublic/euroleague/BER"
          height="75px"
          width="100%"
        ></iframe>
      </div> */}

      <div>
        <Link to={'/'}>
          <img className="navbarLogo" src={Logo} alt="Alba Berlin Logo" />
        </Link>
        <img className="kidsZoneB" src={kidsZoneB} alt="Alba Kids Zone" />
      </div>
      <div className="navMiddle">
        <AusmalbildButton />
      </div>
      <div className="links">
        <Link className="link" to={'/game'}>
          <h2>MEMORY SPIEL</h2>
        </Link>
        <Link className="link" to={'/albabet'}>
          <h2>ALBA ABC</h2>
        </Link>
        {/* <Link className="link" to={'/puzzle'}>
          <h2>PUZZLE</h2>
        </Link> */}
      </div>
    </header>
  );
}
