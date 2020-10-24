import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 function Card({rank ,suit}) {
 
     const rank2 = typeof rank === "string" ? rank.toUpperCase() : rank 
     const className  = "card rank-" + rank + " " + suit
     const suits = {spades: "2660", hearts: "2665", clubs: "2663", diamonds: "2666"}
     const uni = String.fromCharCode("0x" + suits[suit]);
     return ( 
         <a className = {className}>
              <span className = "rank">{rank2}</span>
              <span className = "suit">{uni}</span>
         </a>
      );
   }  
 
 class Player extends React.Component {
   
    renderCard({rank, suit}){
    <Card rank={rank} suit={suit} />
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
      <div className = "playingCards">
       <ul className = "hand">
         { <Card rank={hand[0].rank} suit={hand[0].suit} />}
         {<Card rank={hand[1].rank} suit={hand[1].suit} />}
         
      </ul>
   </div>
     );
   }
 }
class Game extends React.Component {
  render() {
    return ( 
      <div className = "table">
        <div className = "player">
          <Player />
        </div>
      </div>
    );
  }
}

ReactDOM.render (
  <Game />,
  document.getElementById('root')
);