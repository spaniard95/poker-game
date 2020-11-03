import React from 'react';
import './player.css';
import  Hand from '../hand';

const Player = ({
  hand = [
    { rank: 7, suit: "hearts"},
    { rank: 9, suit: "spades"}, 
    { rank: "k", suit: "clubs"},
    { rank: 10, suit: "hearts"},
    { rank: 6, suit: "spades"},
  ], 
}) => (
  <div className = "player">
    <Hand hand={hand} />
  </div>
);

export default Player;