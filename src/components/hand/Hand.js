import React, { useState } from 'react';
import Card from 'components/card';
import './hand.css';

function Hand({hand, setSelectHand,}) {

  return (
        <div className = "playingCards">
             <ul className = "hand"> 
              {hand.map(({rank, suit, selected}, index) => 
                <Card 
                    rank={rank} 
                    suit={suit} 
                    selected={selected}
                    index={index}
                    onSelectCard={setSelectHand} 
                /> 
              )}   
             </ul>
        </div>
    );    
  }
  
  export default Hand;