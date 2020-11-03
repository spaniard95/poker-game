import React from 'react';

import Player from 'components/player';
import './game.css';

class Game extends React.Component {
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
            <Player hand={hand} />
        </div>
      );
    }
  }

  export default Game;