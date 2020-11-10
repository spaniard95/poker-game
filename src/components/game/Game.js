import React from 'react';
import Player from 'components/player';
import './game.css';
import Opponent from 'components/opponent';
import {buildDeck,dealCards} from 'lib';

class Game extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      deck: buildDeck()
    };
  }
    render() {
      const hand = [
        { rank: 7, suit: "hearts"},
        { rank: 9, suit: "spades"}, 
        { rank: "k", suit: "clubs"},
        { rank: 10, suit: "hearts"},
        { rank: 6, suit: "spades"},
      ];
      return ( 
        <div className = "table">
            <Player hand={dealCards(this.state.deck, 5).cards} />
            <Opponent hand={hand}/>
        </div>
      );
    }
  }

  export default Game;