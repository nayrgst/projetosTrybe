import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRoute from './renderWithRouter';

describe('Testando o componente App', () => {
  it('Verifica se o app tem um conjunto fixo de links', () => {
    renderWithRoute(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    const about = screen.getByRole('link', { name: /about/i });
    const favs = screen.getByRole('link', { name: /favorite pokémons/i });

    expect(home).toBeDefined();
    expect(about).toBeDefined();
    expect(favs).toBeDefined();
  });

  it(`Verifica se ao clicar no botão home é redirecionado 
  para a pagina home`, () => {
    const { history } = renderWithRoute(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it(`Verifica se ao clicar no botão about é redirecionado 
  para a pagina sobre`, () => {
    const { history } = renderWithRoute(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    userEvent.click(about);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  it(`Verifica se ao clicar no botão favorite é redirecionado
   para a pagina de pokemon favoritos`, () => {
    const { history } = renderWithRoute(<App />);
    const favs = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favs);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });
});
