import React from 'react';
import  { Hand, HiddenHand } from 'components/hand';
import './opponent.css';

const Opponent = ({ hand, show}) => (
    <div className = "opponent">
      {show ? <Hand hand={hand} /> : <HiddenHand />} 
   </div>
);

export default Opponent;