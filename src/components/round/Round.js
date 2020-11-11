import React from 'react';
import Player from 'components/player';
import Opponent from 'components/opponent';
import { buildDeck, dealCards } from 'lib';

const roundState = [
    {}
]



const Round = () => {
    const startRound = {
        deck: buildDeck(),
        hand1: {},
        hand2: {},
        roundWinner: false,
    };
    let step = dealCards(startRound.deck, 5);
    startRound.hand1 = step.cards;
    startRound.deck = step.deck;
    step = dealCards(startRound.deck, 5);
    startRound.hand2 = step.cards;
  
  return(
      <a>
        <Player hand={startRound.hand1} />
        <Opponent hand={startRound.hand2} show={true}/>
     </a>
  );
};

export default Round;