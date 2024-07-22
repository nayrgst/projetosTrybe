import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  render() {
    const { value, onInputChange } = this.props;

    return (
      <section>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name"
            value={ value }
            onChange={ onInputChange }
          />
        </label>
      </section>
    );
  }
}
Name.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // name: PropTypes.string.isRequired,
};

export default Name;
