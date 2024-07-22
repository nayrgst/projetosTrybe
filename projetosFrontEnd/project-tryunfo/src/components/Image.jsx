import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { value, onInputChange } = this.props;

    return (
      <section>
        <label htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="image"
            onChange={ onInputChange }
            value={ value }
          />
        </label>
      </section>
    );
  }
}
Image.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Image;
