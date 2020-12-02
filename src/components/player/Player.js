import React, { useState } from 'react';
import  { Hand } from 'components/hand';
import { changeCards } from 'lib';
import './player.css';

const Player = ({initHand, giveCards}) => {
  const [hand, setHand] = useState(initHand);
  
  //keeps the good cards, asks for new cards and sets new hand 
  const discard = () => {
    const goodCards = hand.filter(card => !card.selected); 
    setHand(
      changeCards(                            
        goodCards,                                
        giveCards(5 - goodCards.length)           //new cards from deck in Round component
      )
    );
  };
  
  //selects cards that later might be discarded
  const setSelectHand = index => {
    setHand( prev => {
      let newHand = [...hand];
      newHand[index].selected = !prev[index].selected;
      return newHand;
      }
    )
  };
  
  return (
    <div className = "player">
      <Hand 
        hand={hand}
        setSelectHand={setSelectHand} 
      />
      <button 
        id='ui'
        onClick={() => discard()}
      >discard
      </button>
    </div>
  );
}

export default Player;