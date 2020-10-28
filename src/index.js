import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/index';
 
 
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
         {hand.map(({rank, suit}) => 
          <Card rank={rank} suit={suit} />
         )}
         
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