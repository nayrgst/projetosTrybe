import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRoute from './renderWithRouter';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Testando o componente favorite pokemon', () => {
  it('Verfica se o texto favorite pokemon found é exibido', () => {
    renderWithRoute(<FavoritePokemons />);
    const fav = screen.getByText(/no favorite pokemon found/i);
    expect(fav).toBeDefined();
  });

  it('Verifica se todos os cards favoritados são exibidos', () => {
    renderWithRoute(<App />);
    const pokemonDatails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonDatails);

    const favoritePokemon = screen.getByRole('checkbox',
      { name: /pokémon favoritado\?/i });
    userEvent.click(favoritePokemon);

    const favorites = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favorites);
  });
});
