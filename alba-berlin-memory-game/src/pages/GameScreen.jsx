import jThiemann from '../assets/images/JohannesThiemannKarte.png';
import jThiemannInfo from '../assets/images/JohannesThiemann.png';
import jMattisseck from '../assets/images/JonasMattisseckKarte.png';
import jMattisseckInfo from '../assets/images/JonasMattisseck.png';
import lOlinde from '../assets/images/LouisOlindeKarte.png';
import lOlindeInfo from '../assets/images/LouisOlinde.png';
import tSchneider from '../assets/images/TimSchneiderKarte.png';
import tSchneiderInfo from '../assets/images/TimSchneider.png';
import mDelow from '../assets/images/MalteDelowKarte.png';
import mDelowInfo from '../assets/images/MalteDelow.png';
import cKoumadje from '../assets/images/ChristKoumadjeKarte.png';
import cKoumadjeInfo from '../assets/images/ChristKoumadje.png';
import gProcida from '../assets/images/GabrieleProcidaKarte.png';
import gProcidaInfo from '../assets/images/GabrieleProcida.png';
import jBean from '../assets/images/JustinBeanKarte.png';
import jBeanInfo from '../assets/images/JustinBean.png';
import mSpagnolo from '../assets/images/MatteoSpagnoloKarte.png';
import mSpagnoloInfo from '../assets/images/MatteoSpagnolo.png';
import mThomas from '../assets/images/MattThomasKarte.png';
import mThomasInfo from '../assets/images/MattThomas.png';
import sBrown from '../assets/images/SterlingBrownKarte.png';
import sBrownInfo from '../assets/images/SterlingBrown.png';
import yWetzel from '../assets/images/YanniWetzelKarte.png';
import yWetzelInfo from '../assets/images/YanniWetzel.png';
import zSamar from '../assets/images/ZigaSamarKarte.png';
import zSamarInfo from '../assets/images/ZigaSamar.png';
import kNikic from '../assets/images/KresimirNikicKarte.png';
import kNikicInfo from '../assets/images/KresimirNikic.png';
import eRapieque from '../assets/images/EliasRapiequeKarte.png';
import eRapiequeInfo from '../assets/images/EliasRapieque.png';
import memorySpiel from '../assets/images/memorySpiel.png';
import Logo from '../assets/images/AlbaKarte.png';

import { useEffect, useState } from 'react';
import SingleCard from '../Components/SingleCard';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const uniqueCardsArray = [
  {
    name: 'Johannes THIEMANN',
    image1: jThiemann,
    image2: jThiemannInfo,
    url: 'https://www.albaberlin.de/index.php?id=1352',
    matched: false,
  },
  {
    name: 'Jonas Mattisseck',
    image1: jMattisseck,
    image2: jMattisseckInfo,
    url: 'https://www.albaberlin.de/index.php?id=1343',
    matched: false,
  },
  {
    name: 'Louis Olinde',
    image1: lOlinde,
    image2: lOlindeInfo,
    url: 'https://www.albaberlin.de/index.php?id=1349',
    matched: false,
  },
  {
    name: 'Tim Schneider',
    image1: tSchneider,
    image2: tSchneiderInfo,
    url: 'https://www.albaberlin.de/index.php?id=1350',
    matched: false,
  },
  {
    name: 'Malte Delow',
    image1: mDelow,
    image2: mDelowInfo,
    url: 'https://www.albaberlin.de/index.php?id=1347',
    matched: false,
  },
  {
    name: 'Khalifa Koumadje',
    image1: cKoumadje,
    image2: cKoumadjeInfo,
    url: 'https://www.albaberlin.de/index.php?id=1353',
    matched: false,
  },
  {
    name: 'Gabriel PROCIDA',
    image1: gProcida,
    image2: gProcidaInfo,
    url: 'https://www.albaberlin.de/index.php?id=1345',
    matched: false,
  },
  {
    name: 'Justin BEAN',
    image1: jBean,
    image2: jBeanInfo,
    url: 'https://www.albaberlin.de/index.php?id=1351',
    matched: false,
  },
  {
    name: 'Matteo SPAGNOLO',
    image1: mSpagnolo,
    image2: mSpagnoloInfo,
    url: 'https://www.albaberlin.de/index.php?id=1342',
    matched: false,
  },
  {
    name: 'Matt THOMAS',
    image1: mThomas,
    image2: mThomasInfo,
    url: 'https://www.albaberlin.de/index.php?id=1344',
    matched: false,
  },
  {
    name: 'Sterling BROWN',
    image1: sBrown,
    image2: sBrownInfo,
    url: 'https://www.albaberlin.de/index.php?id=1346',
    matched: false,
  },
  {
    name: 'Yanni WETZEL',
    image1: yWetzel,
    image2: yWetzelInfo,
    url: 'https://www.albaberlin.de/index.php?id=1355',
    matched: false,
  },
  {
    name: 'Zigar SAMAR',
    image1: zSamar,
    image2: zSamarInfo,
    url: 'https://www.albaberlin.de/index.php?id=1341',
    matched: false,
  },
  {
    name: 'Kresimir NIKIC',
    image1: kNikic,
    image2: kNikicInfo,
    url: 'https://www.albaberlin.de/index.php?id=1354',
    matched: false,
  },
  {
    name: 'Elias RAPIEQUE',
    image1: eRapieque,
    image2: eRapiequeInfo,
    url: 'https://www.albaberlin.de/index.php?id=1348',
    matched: false,
  },
];

export default function GameScreen() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showPlayerDetails, setShowPlayerDetails] = useState(false);
  const [matchedPlayer, setMatchedPlayer] = useState(null);

  // shuffle cards
  const shuffleCards = () => {
    // Shuffle the uniqueCardsArray
    const shuffledUniqueCards = [...uniqueCardsArray].sort(
      () => Math.random() - 0.5
    );

    // Create a new array with a maximum of 6 unique cards
    const limitedUniqueCards = shuffledUniqueCards.slice(0, 10);

    // Duplicate the limited cards to have a total of 12 cards
    const duplicatedCards = [...limitedUniqueCards, ...limitedUniqueCards];

    // Shuffle the duplicated cards
    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);

    // Assign IDs to each card
    const cardsWithIds = shuffledCards.map(card => ({
      ...card,
      id: Math.random(),
    }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(cardsWithIds);
    setTurns(0);
    setMatchedPlayer();
  };

  //handle a choice
  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  /*  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if(choiceOne.image === choiceTwo.image) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.image === choiceOne.image) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log('those cards do not match')
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo]) */

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.image1 === choiceTwo.image1) {
        setCards(prevCards => {
          const updatedCards = prevCards.map(card => {
            if (card.image1 === choiceOne.image1) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });

          const matchedPlayer = updatedCards.find(
            card => card.image1 === choiceOne.image1
          );

          setMatchedPlayer(matchedPlayer);
          setShowPlayerDetails(true);

          return updatedCards;
        });
        resetTurn();
      } else {
        console.log('Those cards do not match');
        setTimeout(() => {
          resetTurn();
          setShowPlayerDetails(false);
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  //start the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="pageView">
        <img className="memorySpiel" src={memorySpiel} alt="Memory Spiel" />

        <div className="game-container">
          <div className="card-grid">
            {cards.map(card => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne ||
                  card === choiceTwo ||
                  card.matched === true
                }
                disabled={disabled}
              />
            ))}
          </div>

          <div className="player-details">
            <div className="newGameTurns">
              <p>
                <strong>TURNS: {turns}</strong>
              </p>
              <button onClick={shuffleCards}>NEW GAME</button>
            </div>
            <div className="player-details">
              {showPlayerDetails && matchedPlayer ? (
                <div className="bio">
                  <img src={matchedPlayer.image2} alt={matchedPlayer.name} />
                  <Link
                    to={matchedPlayer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>mehr Info</h2>
                  </Link>
                  {/* Additional player information fields */}
                </div>
              ) : (
                <div className="bio">
                  <img className="default-image" src={Logo} alt="Alba Logo" />
                  <Link
                    to="https://www.albaberlin.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>mehr Info</h2>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
