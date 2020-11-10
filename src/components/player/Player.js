import React from 'react';
import  Hand from 'components/hand';
import './player.css';

const Player = ({ hand }) => (
  <div className = "player">
    <Hand hand={hand} />
  </div>
);

export default Player;