import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { login } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
      disabled: true,
    }, () => this.disabledButton());
  }

  disabledButton = () => {
    const { email, password } = this.state;
    const valorMinimo = 6;
    const caracteres = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(caracteres) && password.length >= valorMinimo) {
      this.setState({
        disabled: false,
      });
    }
  }

  submitButton = () => {
    const { email } = this.state;
    const { history, actionLogin } = this.props;
    actionLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <label htmlFor="inputEmail">
          Email:
          <input
            name="email"
            id="inputEmail"
            type="text"
            value={ email }
            onChange={ this.onInputChange }
            data-testid="email-input"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            name="password"
            id="password"
            type="password"
            value={ password }
            onChange={ this.onInputChange }
            data-testid="password-input"
          />
        </label>

        <button
          type="submit"
          onClick={ this.submitButton }
          disabled={ disabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionLogin: (email) => dispatch(login(email)),
});

Login.propTypes = {
  actionLogin: propTypes.func,
  history: propTypes.objectOf(propTypes.any),
}.isrequired;

export default connect(null, mapDispatchToProps)(Login);
