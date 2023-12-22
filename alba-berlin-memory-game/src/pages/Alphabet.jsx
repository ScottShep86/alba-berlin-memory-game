// import React from 'react'
import albaAlphabet from '../assets/images/albaAlphabet.png';
import ALetter from '../assets/images/A.png';
import alba from '../assets/images/ALBA Logo RGB.png';
import BLetter from '../assets/images/B.png';
import basketball from '../assets/images/basketball.jpg';
import CLetter from '../assets/images/C.png';
import court from '../assets/images/court.jpg';
import DLetter from '../assets/images/D.png';
import distanzwurf from '../assets/images/distanzwurf.jpg';
import ELetter from '../assets/images/E.png';
import erfolg from '../assets/images/erfolg.jpg';
import FLetter from '../assets/images/F.png';
import frauenTeam from '../assets/images/frauenTeam.jpg';
import GLetter from '../assets/images/G.png';
import geschichte from '../assets/images/geschichte.jpg';
import HLetter from '../assets/images/H.png';
import halle from '../assets/images/halle.jpg';
import ILetter from '../assets/images/I.png';
import inboundPass from '../assets/images/inboundPass.jpg';
import JLetter from '../assets/images/J.png';
import jumpShot from '../assets/images/jumpShot.jpg';
import KLetter from '../assets/images/K.png';
import korb from '../assets/images/korb.jpg';
import LLetter from '../assets/images/L.png';
import layup from '../assets/images/layup.jpg';
import MLetter from '../assets/images/M.png';
import mannschaft from '../assets/images/mannschaft.jpg';
import NLetter from '../assets/images/N.png';
import nachwuchs from '../assets/images/nachwuchs.jpg';
import OLetter from '../assets/images/O.png';
import offensive from '../assets/images/offensive.jpg';
import PLetter from '../assets/images/P.png';
import pass from '../assets/images/pass.jpg';
import QLetter from '../assets/images/Q.png';
import qualifikation from '../assets/images/qualifikation.jpg';
import RLetter from '../assets/images/R.png';
import rebound from '../assets/images/rebound.jpeg';
import SLetter from '../assets/images/S.png';
import slamdunk from '../assets/images/slamdunk.jpg';
import TLetter from '../assets/images/T.png';
import trainer from '../assets/images/trainer.jpg';
import ULetter from '../assets/images/U.png';
import unterstuetzung from '../assets/images/fans.jpg';
import VLetter from '../assets/images/V.png';
import verteidigung from '../assets/images/verteidigung.jpg';
import WLetter from '../assets/images/W.png';
import wurf from '../assets/images/wurf.jpg';
import XLetter from '../assets/images/X.png';
import xFaktor from '../assets/images/xFaktor.jpg';
import YLetter from '../assets/images/Y.png';
import youngster from '../assets/images/youngster.jpg';
import ZLetter from '../assets/images/Z.png';
import zuschauer from '../assets/images/zuschauer.jpg';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './Alphabet.css';
import { useState } from 'react';

const albaAlphabetArray = [
  {
    letter: 'A',
    image1: ALetter,
    image2: alba,
    dictionary: 'lba Berlin: Unser Lieblingsteam!',
  },
  {
    letter: 'B',
    image1: BLetter,
    image2: basketball,
    dictionary: 'asketball: Das coole Spiel mit dem Ball und dem Korb.',
  },
  {
    letter: 'C',
    image1: CLetter,
    image2: court,
    dictionary: 'ourt: Der Platz, auf dem wir Basketball spielen.',
  },
  {
    letter: 'D',
    image1: DLetter,
    image2: distanzwurf,
    dictionary:
      'istanzwurf: Ein Wurf, der von weiter entfernt vom Korb gemacht wird.',
  },
  {
    letter: 'E',
    image1: ELetter,
    image2: erfolg,
    dictionary:
      'rfolg: Das Ziel, das Alba Berlin anstrebt, indem sie hart arbeiten und als Team zusammenhalten.',
  },
  {
    letter: 'F',
    image1: FLetter,
    image2: frauenTeam,
    dictionary:
      'rauen-Team: Neben dem Männer-Team hat Alba Berlin auch ein tolles Frauen-Team.',
  },
  {
    letter: 'G',
    image1: GLetter,
    image2: geschichte,
    dictionary:
      'eschichte: Die Vergangenheit und Tradition von Alba Berlin, die das Team zu dem gemacht haben, was es heute ist.',
  },
  {
    letter: 'H',
    image1: HLetter,
    image2: halle,
    dictionary: 'alle: MB Arena. Wo Alba Berlin ihre Spiele austrägt.',
  },
  {
    letter: 'I',
    image1: ILetter,
    image2: inboundPass,
    dictionary: 'nbound-Pass: Der Anfang, wenn der Ball ins Spiel kommt.',
  },
  {
    letter: 'J',
    image1: JLetter,
    image2: jumpShot,
    dictionary: 'ump Shot: Ein hoher Wurf in den Korb.',
  },
  {
    letter: 'K',
    image1: KLetter,
    image2: korb,
    dictionary: 'orb: Wo wir den Ball werfen wollen, um Punkte zu machen.',
  },
  {
    letter: 'L',
    image1: LLetter,
    image2: layup,
    dictionary: 'ay-up: Ein sanfter Wurf nah am Korb.',
  },
  {
    letter: 'M',
    image1: MLetter,
    image2: mannschaft,
    dictionary: 'annschaft: Alle Spieler, die zusammenarbeiten.',
  },
  {
    letter: 'N',
    image1: NLetter,
    image2: nachwuchs,
    dictionary: 'achwuchs: Junge Spieler, die lernen und wachsen.',
  },
  {
    letter: 'O',
    image1: OLetter,
    image2: offensive,
    dictionary: 'ffensive: Wenn wir Punkte machen wollen.',
  },
  {
    letter: 'P',
    image1: PLetter,
    image2: pass,
    dictionary: 'assen: Teilen des Balls mit Teamkollegen.',
  },
  {
    letter: 'Q',
    image1: QLetter,
    image2: qualifikation,
    dictionary: 'ualifikation: Wir kämpfen, um in die Playoffs zu kommen.',
  },
  {
    letter: 'R',
    image1: RLetter,
    image2: rebound,
    dictionary: 'ebound: Den Ball zurückholen, nachdem er verfehlt wurde.',
  },
  {
    letter: 'S',
    image1: SLetter,
    image2: slamdunk,
    dictionary: 'lam Dunk: Ein toller Korb, bei dem der Ball gedunkt wird.',
  },
  {
    letter: 'T',
    image1: TLetter,
    image2: trainer,
    dictionary: 'rainer: Die Person, die das Team trainiert.',
  },
  {
    letter: 'U',
    image1: ULetter,
    image2: unterstuetzung,
    dictionary: 'nterstützung: Wir jubeln Alba Berlin zu!',
  },
  {
    letter: 'V',
    image1: VLetter,
    image2: verteidigung,
    dictionary: 'erteidigung: Wenn wir den Korb schützen.',
  },
  {
    letter: 'W',
    image1: WLetter,
    image2: wurf,
    dictionary: 'urf: Der Versuch, den Ball in den Korb zu werfen.',
  },
  {
    letter: 'X',
    image1: XLetter,
    image2: xFaktor,
    dictionary:
      '-Faktor: Das Geheimnis des Erfolgs von Alba Berlin! Ein besonderes Element, das dieses Team einzigartig und erfolgreich macht.',
  },
  {
    letter: 'Y',
    image1: YLetter,
    image2: youngster,
    dictionary: 'oungster: Junge Spieler, die das Team unterstützen.',
  },
  {
    letter: 'Z',
    image1: ZLetter,
    image2: zuschauer,
    dictionary:
      'uschauer: Das sind wir, wenn wir die Spiele ansehen und klatschen!',
  },
];

export default function Alphabet() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleClick = letter => {
    if (selectedLetter === letter) {
      setSelectedLetter(null); // Hide dictionary if same letter is clicked again
    } else {
      setSelectedLetter(letter);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="pageView">
        <img className="memorySpiel" src={albaAlphabet} alt="ALBA Alphabet" />
        <div className="fullAlphabet">
          {albaAlphabetArray.map(letterData => (
            <div key={letterData.letter}>
              <button onClick={() => handleClick(letterData.letter)}>
                <img
                  src={letterData.image1}
                  alt={`Image for letter ${letterData.letter}`}
                />
              </button>
            </div>
          ))}
        </div>
        {/* Separate div to display dictionary */}
        <div className="dictionaryContainer">
          {albaAlphabetArray.map(letterData => (
            <div
              key={`dictionary_${letterData.letter}`}
              className={
                selectedLetter === letterData.letter
                  ? 'showDictionary'
                  : 'hideDictionary'
              }
            >
              {selectedLetter === letterData.letter && (
                <div className="dictionary">
                  <div>
                    <img className="dictionaryImage" src={letterData.image2} />
                  </div>
                  <div className="dictionaryEntry">
                    <img
                      src={letterData.image1}
                      alt={`Image for letter ${letterData.letter}`}
                      className="selectedImage"
                    />
                    <p>{letterData.dictionary.toUpperCase()}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
