import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RemoveBtn extends Component {
  render() {
    const { removeCard } = this.props;

    return (
      <section>
        <button
          data-testid="delete-button"
          type="button"
          name="removeBtn"
          onClick={ removeCard }
        >
          Excluir
        </button>
      </section>
    );
  }
}

RemoveBtn.propTypes = {
  removeCard: PropTypes.func.isRequired,
};

export default RemoveBtn;
