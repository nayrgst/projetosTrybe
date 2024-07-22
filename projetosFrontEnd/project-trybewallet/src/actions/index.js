export const LOGIN = 'LOGIN';

export const CURRENCIES = 'CURRENCIES';

export const EXPENSES = 'EXPENSES';

export const currencie = (currencies) => ({
  type: 'CURRENCIES',
  currencies,
});

export const addExpenses = (expenses) => ({
  type: 'EXPENSES',
  expenses,
});

export const apiExpenses = (state) => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await api.json();
  state.exchangeRates = data;
  dispatch(addExpenses(state));
};

export const apiCurrencies = () => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await api.json();
  const result = Object.keys(data).filter((vrf) => vrf !== 'USDT');
  dispatch(currencie(result));
  // console.log(currencies(result));
};

export const login = (email) => ({
  type: LOGIN,
  email,
});
