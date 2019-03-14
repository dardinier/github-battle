import React from 'react';
import propTypes from 'prop-types';

const Repository = ({ owner, name, rank, logo, url, stars }) => (
  <a className="repository col-12 col-sm-6 col-md-3" href={url}>
    <p>#{rank}</p>
    <img src={logo} alt={name} className="repository__img"/>
    <h5>{name}</h5>
    <h6>@{owner}</h6>
    <p>{stars} stars</p>
  </a>
);

Repository.propTypes = {
  owner: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  rank: propTypes.number.isRequired,
  logo: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  stars: propTypes.number.isRequired,
};

export default Repository;
