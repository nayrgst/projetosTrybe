import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trunfo extends Component {
  render() {
    const { value, onInputChange, hasTrunfo } = this.props;

    return (
      <section>

        { hasTrunfo ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
          : (
            <label htmlFor="check">
              Super trunfo ?
              <input
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                id="check"
                checked={ value }
                onChange={ onInputChange }
              />
            </label>

          )}

      </section>
    );
  }
}

Trunfo.propTypes = {
  value: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Trunfo;
