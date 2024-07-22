import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attr1 extends Component {
  render() {
    const { value, onInputChange } = this.props;

    return (
      <div>
        <div>
          Atributo 1:
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ value }
            onChange={ onInputChange }
          />
        </div>
      </div>
    );
  }
}

Attr1.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attr1;
