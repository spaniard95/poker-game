import React from 'react';
import './player.css';
import  Hand from '../hand';

class Player extends React.Component {
    render() {
      const hand = [
        { rank: 7, suit: "hearts"},
        { rank: 9, suit: "spades"}, 
        { rank: "k", suit: "clubs"},
        { rank: 10, suit: "hearts"},
        { rank: 6, suit: "spades"},
      ];
      return (
       <div className = "player">
          <Hand hand={hand} />
       </div>
      );
    }
  }
  
  export default Player;