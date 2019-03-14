import React, {Component} from 'react';
import { getUser } from "../../utils/api";
import queryString from 'query-string';
import ResultPlayer from "./ResultPlayer";
import {Link} from "react-router-dom";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
    };
  }

  getScore(username, property) {
    return new Promise((resolve, reject) => {
      getUser(username)
        .then(response => response.json()
          .then(result => {
            const { followers, following, public_repos, public_gists } = result;
            let score = followers + following + public_repos + public_gists;
            console.log(result);
            this.setState({ [property]: { gh_datas: result, score } });
            resolve();
          })
        );
    });
  }

  SetWinnerBetween(playerOne, playerTwo) {
    let winner = null;
    let loser = null;

    if (this.state[playerOne].score > this.state[playerTwo].score) {
      winner = playerOne;
      loser = playerTwo;
    } else {
      winner = playerTwo;
      loser = playerOne;
    }

    this.setState({
      [winner] : { ...this.state[winner], status: 'Winner' },
      [loser] : { ...this.state[loser], status: 'Loser' },
      });
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    if (query.playerOne !== undefined && query.playerTwo !== undefined) {

      Promise.all([
        this.getScore(query.playerOne, 'playerOne'),
        this.getScore(query.playerTwo, 'playerTwo'),
      ])
        .then(() => this.SetWinnerBetween('playerOne', 'playerTwo'));
    }
  }

  render() {
    if (this.state.playerOne !== null || this.state.playerTwo !== null) {
      const { playerOne, playerTwo } = this.state;
      return (
        <div className="row">
          <ResultPlayer {...playerOne}/>
          <ResultPlayer {...playerTwo}/>

          <Link to="/battle">GG ! Re-battle ?</Link>
        </div>
      );
    }
    return (
      <div>
        Erreur
      </div>
    )
  }
}

export default Result;
