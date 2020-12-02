import React, { useState } from 'react';
import './card.css';

function Card({rank, suit, selected, index, onSelectCard}) {
  const rank2 = typeof rank === "string" ? rank.toUpperCase() : rank ;
  const className  = "card rank-" + rank + " " + suit;
  const suits = {spades: "2660", hearts: "2665", clubs: "2663", diamonds: "2666"};
  const uni = String.fromCharCode("0x" + suits[suit]);
  
  const HandComponent = (
        <li>   
          <a className = {className} onClick={() => {
              onSelectCard(index);
            }
          }>
              <span className = "rank">{rank2}</span>
              <span className = "suit">{uni}</span>
          </a>
        </li>
  ); 
  
  if(selected){
    return(
      <li>
        <strong>{HandComponent} </strong>
      </li>
    );
   }  
  else {
    return(
      <li>
        {HandComponent}
      </li>   
     );  
   }
} 
  
export default Card;