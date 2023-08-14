import jThiemann from '../assets/images/jThiemann.png';
import jMattisseck from '../assets/images/jMattisseck.png';
import lOlinde from '../assets/images/lOlinde.png';
import tSchneider from '../assets/images/tSchneider.png';
import mDelow from '../assets/images/mDelow.png';
import cKoumadje from '../assets/images/cKoumadje.png';


import { useEffect, useState } from 'react'
import SingleCard from '../Components/SingleCard';

const uniqueCardsArray = [
  {
    name: 'Johannes Thiemann',
    position: 'PF/C',
    größe: '2,06 m', 
    image: jThiemann,
    matched: false
  },
  {
    name: 'Jonas Mattisseck',
    position: 'SG/PG',
    größe: '1,92 m', 
    image: jMattisseck,
    matched: false
  },
  {
    name: 'Louis Olinde',
    position: 'SF/PF',
    größe: '2,05 m', 
    image: lOlinde,
    matched: false
  },
  {
    name: 'Tim Schneider',
    position: 'PF/SF',
    größe: '2,08 m', 
    image: tSchneider,
    matched: false
  },
  {
    name: 'Malte Delow',
    position: 'SF/SG',
    größe: '1,97 m', 
    image: mDelow,
    matched: false
  },
  {
    name: 'Christ Koumadje',
    position: 'C',
    größe: '2,21 m', 
    image: cKoumadje,
    matched: false
  }
]


export default function GameScreen() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState (null)
  const [choiceTwo, setChoiceTwo] = useState (null)
  const [disabled, setDisabled] = useState(false)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...uniqueCardsArray, ...uniqueCardsArray]
      .sort(() => Math.random() -0.5)
      .map((card) => ({...card, id: Math.random()}))

      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare 2 selected cards
  useEffect(() => {
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
  }, [choiceOne, choiceTwo])

  console.log(cards)

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns +1)
    setDisabled(false)
  }

  //start the game automatically
  useEffect(() => {
    shuffleCards()
  }, [])
  
  
  return (
    <>
    <h1>Game Screen</h1>
    <button onClick={shuffleCards}>New Game</button>
    <p>Turns: {turns}</p>
    <div className = "card-grid">
        {cards.map(card => (
            <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice} 
            flipped={card === choiceOne || card === choiceTwo || card.matched === true} 
            disabled={disabled}
            />
        ))}
    </div>
    </>
  )
}
