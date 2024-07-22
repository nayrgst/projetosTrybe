import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rare extends Component {
  render() {
    const { value, onInputChange } = this.props;

    return (
      <section>
        Raridade:
        <select
          name="cardRare"
          data-testid="rare-input"
          value={ value }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </section>
    );
  }
}

Rare.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Rare;
