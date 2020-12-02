import React, { useState, useRef, useEffect } from 'react';
import Player from 'components/player';
import Opponent from 'components/opponent';
import { buildDeck, dealCards } from 'lib';

const Round = props => {
  const [stage, setStage] = useState({turn: 0, playersAlive: props.players.length});
 
  const deck = useRef(buildDeck());

  const giveCards = num => {
     const cards = dealCards(deck.current, num).cards;
     deck.current = deck.current.slice(num);
     return cards;
  } 

  // const playerAnswered = id => {
  //   setStage(prevStage => )
  // }
  
  const handleCardClick = () => {alert()}
  
  return (
    <a>
      <Player 
        id={0}
        initHand={giveCards(5)} 
        giveCards = {giveCards}
      />
      <Opponent
        id={1} 
        hand={giveCards(5)} 
        show={false}/>
    </a>
  );
}

export default Round;