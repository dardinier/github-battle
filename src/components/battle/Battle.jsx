import React, {Component} from 'react';
import PlayerForm from "./PlayerForm";
import PlayerResult from "./PlayerResult";
import {Link} from "react-router-dom";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: 'playerOne',
          name: 'Player One',
          username: '',
        },
        {
          id: 'playerTwo',
          name: 'Player Two',
          username: '',
        },
      ],
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  updatePlayer(id, username) {
    const newPlayers = [...this.state.players];
    const indexToUpdate = this.state.players.findIndex(player => player.id === id);
    let playerToUpdate = this.state.players.find(player => player.id === id);

    newPlayers[indexToUpdate] = {
      ...playerToUpdate,
      username
    };

    this.setState({ players: newPlayers });
  }

  onFormSubmit(id, value) {
    this.updatePlayer(id, value);
  }

  onReset(id) {
    this.updatePlayer(id, '');
  }

  getPlayersParams() {
    const formattedPlayers = [];
    this.state.players.forEach(player => {
      formattedPlayers.push(`${player.id}=${player.username}`);
    });
    return `?${formattedPlayers.join('&')}`;
  }

  render() {
    const { players } = this.state;

    let isMatchReady = true;
    players.forEach(player => {
      if (player.username === '') {
        isMatchReady = false;
      }
    });

    return (
      <div className="row">
        {players.map(player => {
          if (player.username === '') {
            return (
              <PlayerForm key={player.id} id={player.id} name={player.name} onFormSubmit={this.onFormSubmit}/>
            );
          } else {
            return (
              <PlayerResult key={player.id} id={player.id} username={player.username} onReset={this.onReset}/>
            )
          }
        })}
        {isMatchReady && (
          <Link to={{ pathname: "/result", search: this.getPlayersParams() }}>Battle</Link>
        )}
      </div>
    );
  }
}

export default Battle;
