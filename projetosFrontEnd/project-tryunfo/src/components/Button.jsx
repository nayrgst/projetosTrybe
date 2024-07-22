import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabled, onSaveButtonClick } = this.props;

    return (
      <section>
        <button
          data-testid="save-button"
          type="button"
          name="isSaveButtonDisabled"
          disabled={ disabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Button;
