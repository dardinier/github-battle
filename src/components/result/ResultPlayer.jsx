import React from 'react';
import PropTypes from 'prop-types';

const ResultPlayer = ({ score, status, gh_datas: { avatar_url, login, name, location, bio, email, blog, followers, following, public_repos } }) => (
  <div className="col-6 player-card">
    <h2>{status}</h2>
    <h3>Score : {score}</h3>
    <img src={avatar_url} className="player-card__img" alt={login}/>
    <h5>@{login}</h5>
    <h6>{name}</h6>
    <p>{location}</p>
    <p>{bio}</p>
    <p><a href={`mailto:${email}`}>{email}</a></p>
    <p><a href={blog}>{blog}</a></p>
    <p>Followers : {followers}</p>
    <p>Following : {following}</p>
    <p>Public repositories : {public_repos}</p>
  </div>
);

ResultPlayer.propTypes = {
  score: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  gh_datas: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultPlayer;
