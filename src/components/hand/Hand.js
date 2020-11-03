import React from 'react';
import './hand.css';

function Card({rank, suit}) {

    const rank2 = typeof rank === "string" ? rank.toUpperCase() : rank ;
    const className  = "card rank-" + rank + " " + suit;
    const suits = {spades: "2660", hearts: "2665", clubs: "2663", diamonds: "2666"};
    const uni = String.fromCharCode("0x" + suits[suit]);
    
    return ( 
      <li>
        <a className = {className}>
             <span className = "rank">{rank2}</span>
             <span className = "suit">{uni}</span>
        </a>
     </li>
    );
  }  
  
function Hand({hand}) {
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
  
  export default Hand;