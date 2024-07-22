import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import WalletPage from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route path="/carteira" component={ WalletPage } />
    </Switch>
  );
}

export default App;
