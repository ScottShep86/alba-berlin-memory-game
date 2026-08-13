import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import puzzle from '../assets/images/puzzle.png';
import puzzleImage from '../assets/images/ALBA Logo RGB.png';

export default function Puzzle() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="pageView">
        <img className="memorySpiel" src={puzzle} alt="ALBA Puzzle" />
      </section>
      <Footer />
    </div>
  );
}
