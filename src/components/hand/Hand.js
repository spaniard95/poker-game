import React from 'react';
import Card from 'components/card';
import './hand.css';

function Hand({hand}) {
    return (
        <div className = "playingCards">
             <ul className = "hand"> 
              {hand.map(({rank, suit, weight}) => 
               <Card rank={rank} suit={suit} /> 
              )}   
             </ul>
        </div>
    );    
  }
  
  export default Hand;