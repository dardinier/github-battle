import React, {Component} from 'react';
import propTypes from 'prop-types';
import Repository from './Repository';

class Repositories extends Component {
  render() {
    const { repositories } = this.props;

    return (
      <div className="row">
        {repositories.map(({ id, owner, name, rank, logo, url, stars }) => (
          <Repository
            key={id}
            owner={owner}
            name={name}
            rank={rank}
            logo={logo}
            url={url}
            stars={stars}
          />
        ))}
      </div>
    )
  }
}

Repositories.propTypes = {
  repositories: propTypes.arrayOf(propTypes.shape({
    owner: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    rank: propTypes.number.isRequired,
    logo: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    stars: propTypes.number.isRequired,
  })).isRequired,
};

export default Repositories;
