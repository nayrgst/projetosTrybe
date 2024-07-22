import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import RemoveBtn from './components/RemoveBtn';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.disabledButton());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.state;
    const cartas = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((prevState) => ({
      cards: [...prevState.cards, cartas],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
        // hasTrunfo: false,
      });
    });
  }

  disabledButton() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage } = this.state;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const soma = attr1 + attr2 + attr3;
    const somaTotal = 210;
    const maior = 90;
    const menos = 0;
    if (
      !cardName.trim() || !cardDescription.trim() || !cardImage.trim()
        || attr1 > maior || attr1 < menos
        || attr2 > maior || attr2 < menos
        || attr3 > maior || attr3 < menos
        || soma > somaTotal) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  removeCard(info) {
    const { cards } = this.state;
    const allCards = cards.filter((vrf) => vrf.cardName !== info.cardName);
    const cardTrf = info.cardTrunfo;
    if (cardTrf === true) {
      this.setState({
        hasTrunfo: !cardTrf,
        cards: allCards,
      });
    } else {
      this.setState({
        hasTrunfo: cardTrf,
        cards: allCards,
      });
    }
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, hasTrunfo, cards } = this.state;
    return (
      <fieldset>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        { cards.map((vrf) => (
          <div
            key={ vrf.cardName }
          >
            <Card
              cardName={ vrf.cardName }
              cardDescription={ vrf.cardDescription }
              cardAttr1={ vrf.cardAttr1 }
              cardAttr2={ vrf.cardAttr2 }
              cardAttr3={ vrf.cardAttr3 }
              cardImage={ vrf.cardImage }
              cardRare={ vrf.cardRare }
              cardTrunfo={ vrf.cardTrunfo }
            />

            <RemoveBtn
              removeCard={ () => this.removeCard(vrf) }
            />
          </div>
        ))}

      </fieldset>
    );
  }
}

export default App;
