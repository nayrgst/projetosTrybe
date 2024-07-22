import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Description from './Description';
import Attr1 from './Attr1';
import Attr2 from './Attr2';
import Attr3 from './Attr3';
import Image from './Image';
import Rare from './Rare';
import Trunfo from './Trunfo';
import Button from './Button';

class Form extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <div>
        <form>
          <Name
            value={ cardName }
            onInputChange={ onInputChange }
          />

          <Description
            value={ cardDescription }
            onInputChange={ onInputChange }
          />

          <Attr1
            value={ cardAttr1 }
            onInputChange={ onInputChange }
          />

          <Attr2
            value={ cardAttr2 }
            onInputChange={ onInputChange }
          />

          <Attr3
            value={ cardAttr3 }
            onInputChange={ onInputChange }
          />

          <Image
            value={ cardImage }
            onInputChange={ onInputChange }
          />

          <Rare
            value={ cardRare }
            onInputChange={ onInputChange }
          />

          <Trunfo
            value={ cardTrunfo }
            onInputChange={ onInputChange }
            hasTrunfo={ hasTrunfo }
          />

          <Button
            disabled={ isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
