import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiCurrencies, apiExpenses } from '../actions';

const sum = 0;
const feeding = 'Alimentação';

class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: feeding,
    };
  }

  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitButton = () => {
    const { expenses } = this.props;
    const { id } = this.state;
    this.setState({
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: feeding,
    });
    this.setState(() => ({
      id: id + 1,
    }));
    expenses(this.state);
  }

  render() {
    const { email, currencie, expense } = this.props;
    // console.log(currencie);
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const type = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value, description, currency, method, tag } = this.state;
    const elements = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
      'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
      'Editar/Excluir'];
    const total = expense.reduce((item, curr) => {
      item += curr.value * Number(curr.exchangeRates[curr.currency].ask);
      return item;
    }, sum);

    return (
      <section>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ total.toFixed(2) }</p>
          {/* toFixed pego no site, ele basicamente converte para que não tenha muitos centavos https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed  */}
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <table>
          <thead>
            <tr>
              { elements.map((items) => (<th key={ items }>{items}</th>)) }
            </tr>
          </thead>
          <tbody>
            { expense.map((vrf) => (
              <tr key={ vrf.id }>
                <td>Real</td>
                <td>{ Number(vrf.value).toFixed(2) }</td>
                <td>{ vrf.description }</td>
                <td>{ vrf.method }</td>
                <td>{ vrf.tag }</td>
                <td>{ vrf.exchangeRates[vrf.currency].name }</td>
                {/* feito desse jeito por que o exchangeRates
                   retorna um objeito e não um array */}
                <td>{ Number(vrf.exchangeRates[vrf.currency].ask).toFixed(2) }</td>
                <td>
                  { (Number(vrf.value) * Number(vrf.exchangeRates[vrf.currency].ask))
                    .toFixed(2) }
                </td>
              </tr>
            )) }
          </tbody>
        </table>
        <form>
          <label htmlFor="inputValue">
            Valor:
            <input
              id="inputValue"
              name="value"
              data-testid="value-input"
              type="number"
              onChange={ this.onInputChange }
              value={ value }
            />
          </label>

          <label htmlFor="descriptionInput">
            Descrição:
            <input
              type="text"
              id="descriptionInput"
              data-testid="description-input"
              onChange={ this.onInputChange }
              description={ description }
              name="description"
            />
          </label>

          <label htmlFor="coin">
            Moeda:
            <select
              id="coin"
              onChange={ this.onInputChange }
              currency={ currency }
              name="currency"
            >
              { currencie.map((coins) => (<option key={ coins }>{coins}</option>)) }
            </select>
          </label>

          <label htmlFor="method">
            Metodo de pagamento:
            <select
              data-testid="method-input"
              id="method"
              onChange={ this.onInputChange }
              method={ method }
              name="method"
            >
              { methods.map((meth) => (<option key={ meth }>{meth}</option>)) }
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              id="tag"
              name="tag"
              data-testid="tag-input"
              onChange={ this.onInputChange }
              tag={ tag }
            >
              {type.map((catag) => (<option key={ catag }>{catag}</option>))}
            </select>

            <button type="button" onClick={ this.submitButton }>
              Adicionar despesa
            </button>
          </label>
        </form>
      </section>
    );
  }
}

Wallet.propTypes = {
  email: propTypes.string,
  currencies: propTypes.func,
  currencie: propTypes.arrayOf(propTypes.any),
  expense: propTypes.arrayOf(propTypes.any),
  expenses: propTypes.func,
}.isrequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencie: state.wallet.currencies,
  expense: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(apiCurrencies()),
  expenses: (state) => dispatch(apiExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
