import React from 'react';
import  Hand from 'components/hand';
import './opponent.css';

const Opponent = ({ hand }) => (
    <div className = "opponent">
      <Hand hand={hand} />
   </div>
);

export default Opponent;