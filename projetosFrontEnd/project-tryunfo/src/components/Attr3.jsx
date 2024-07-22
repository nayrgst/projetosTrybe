import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attr3 extends Component {
  render() {
    const { value, onInputChange } = this.props;

    return (
      <div>
        <div>
          Atributo 3:
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ value }
            onChange={ onInputChange }
          />
        </div>
      </div>
    );
  }
}

Attr3.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attr3;
