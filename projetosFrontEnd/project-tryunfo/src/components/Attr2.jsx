import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attr2 extends Component {
  render() {
    const { value, onInputChange } = this.props;

    return (
      <div>
        <div>
          Atributo 2:
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ value }
            onChange={ onInputChange }
          />
        </div>
      </div>
    );
  }
}

Attr2.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attr2;
