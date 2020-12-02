import React, { useState } from 'react';
import Round from 'components/round';
import './game.css';


const Game = props => {
  const [player, setPlayer] = useState({name: 'player', seat: 1,});
  const [bot, setBot] = useState({name: 'bot', seat: 2, });
  const [button, setButton] = useState(1);

  return (   
    <div className = "table">        
       <Round players={[{player, setPlayer}, {player: bot, setPlayer: setBot}]} />
    </div>
  );
}
// class Game extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       players: [
//         {name: "Player",},
//         {name: "Bot 1",}
//       ],
//    };
//   }
//   render() {
//     return (   
//       <div className = "table">        
//         <Round players={this.state.players}/>
//       </div>
//     );
//   }
// }

export default Game;