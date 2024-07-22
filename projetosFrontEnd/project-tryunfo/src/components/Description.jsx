import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <section>
        <label htmlFor="description">
          Descrição:
          <input
            name="cardDescription"
            data-testid="description-input"
            type="textarea"
            id="description"
            value={ value }
            onChange={ onInputChange }
          />
        </label>
      </section>
    );
  }
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Description;
