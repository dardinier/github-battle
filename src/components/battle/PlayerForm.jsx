import React, {Component} from 'react';
import propTypes from 'prop-types';

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.input = React.createRef();
  }

  handleFormSubmit(event) {
    this.props.onFormSubmit(this.props.id, this.input.current.value);
    event.preventDefault();
  }

  render() {
    const { name } = this.props;
    return (
      <form className="col-6 player-card" onSubmit={this.handleFormSubmit}>
        <h3>{name}</h3>
        <input type="text" ref={this.input}/>
        <input type="submit"/>
      </form>
    );
  }
}

PlayerForm.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onFormSubmit: propTypes.func.isRequired,
};

export default PlayerForm;
