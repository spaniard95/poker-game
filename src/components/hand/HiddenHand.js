import React from 'react';
import './hand.css';

const gameState = ['deal cards', 'betting', "drawing/discard/standpat", 'betting', 'showdown']

function hiddenHand() {
    return (
        <div className = "playingCards">
             <ul className = "hand"> 
              <li>
                  <div class="card back">*</div>
              </li>  
              <li>
                  <div class="card back">*</div>
              </li>
              <li>
                  <div class="card back">*</div>
              </li>  
              <li>
                  <div class="card back">*</div>
              </li>  
              <li>
                  <div class="card back">*</div>
              </li>    
             </ul>
        </div>
    );    
  }

  export default hiddenHand;