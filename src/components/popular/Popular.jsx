import React, { Component } from 'react';
import Repositories from './Repositories';
import Loader from './Loader';
import { getPopularRepositories } from "../../utils/api";

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      isFetched: false,
    };
  }

  componentDidMount() {
    getPopularRepositories()
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            let repositories = [];
            let languages = [];

            json.items.forEach((repository, index) => {
              if (repository.language !== null && languages.indexOf(repository.language) === -1) {
                languages.push(repository.language)
              }
              repositories.push({
                id: repository.id,
                owner: repository.owner.login,
                name: repository.name,
                rank: index + 1,
                logo: repository.owner.avatar_url,
                url: repository.html_url,
                stars: repository.stargazers_count,
              })
            });

            this.setState({
              repositories,
              languages: languages,
              isFetched: true
            })
          });
        }
      });
  }

  render() {
    const { repositories, isFetched } = this.state;
    return (
      <div className="container">
        {isFetched
          ? (
            <Repositories repositories={repositories}/>
          )
          : (
            <Loader/>
          )}
      </div>
    );
  }
}

export default Popular;
