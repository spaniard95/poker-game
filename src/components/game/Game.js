import React from 'react';
import Round from 'components/round';
import './game.css';


class Game extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          roundFinished: false,
      };
  }
    render() {
      return (   
        <div className = "table">        
            <Round />
        </div>
      );
    }
  }

  export default Game;