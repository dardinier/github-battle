import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../../utils/api';
import Loader from "../popular/Loader";

class PlayerResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: '',
      userStatus: 'pending',
    };
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    getUser(this.props.username)
      .then(response => {
        if (response.status === 200) {
          response.json()
            .then(result => {
              this.setState({
                avatarUrl: result.avatar_url,
                userStatus: 'success',
              })
            });
        } else {
          this.setState({ userStatus: 'error' })
        }
      });
  }

  handleReset() {
    this.props.onReset(this.props.id);
  }

  render() {
    const { username } = this.props;
    const { avatarUrl, userStatus } = this.state;

    return (
      <div className="col-6 player-card">
        {userStatus === "pending" && (
          <Loader/>
        )}

        {userStatus === "success" && (
          <React.Fragment>
            <img className="player-card__img" src={avatarUrl} alt={username}/>
            <h5>@{username}</h5>
          </React.Fragment>
        )}

        {userStatus === "error" && (
          <React.Fragment>
            User does not exist
          </React.Fragment>
        )}

        <button type="button" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

PlayerResult.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PlayerResult;
