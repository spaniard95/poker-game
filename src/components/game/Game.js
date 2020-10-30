import React from 'react';
import './game.css';
import Player from '../player';

class Game extends React.Component {
    render() {
      return ( 
        <div className = "table">
            <Player />
        </div>
      );
    }
  }
  export default Game;