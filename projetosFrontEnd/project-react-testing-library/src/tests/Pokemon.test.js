import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRoute from './renderWithRouter';
import App from '../App';

const testId = 'pokemon-weight';
const testId2 = 'pokemon-type';
const testId3 = 'pokemon-name';

describe('Testando o componente Pokemon', () => {
  it('Verfica se a pagina renderiza o nome do pokémon corretamente', () => {
    renderWithRoute(<App />);
    const pokemonName = screen.getByTestId(testId3);
    expect(pokemonName).toHaveTextContent('Pikachu');
    expect(pokemonName).toBeDefined();
  });

  it('Verifica se a pagina renderiza corretamente cada tipo de pokémon', () => {
    renderWithRoute(<App />);
    const pokemonType = screen.getByTestId(testId2);
    expect(pokemonType).toHaveTextContent('Electric');
    expect(pokemonType).toBeDefined();
  });

  it('Verifica se é renderizado corretamente o peso médio do pokemon', () => {
    renderWithRoute(<App />);
    const pokemonWeight = screen.getByTestId(testId);
    expect(pokemonWeight).toHaveTextContent(/average weight: 6\.0 kg/i);
    expect(pokemonWeight).toBeDefined();
  });

  it('Verifica se a pagina renderiza corretamente a imagem na tela', () => {
    renderWithRoute(<App />);
    const pokemonImage = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pokemonImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImage).toHaveAttribute('alt', 'Pikachu sprite');
  });

  it('Verifica se renderiza o link de navegação para os detalhes do pokemon', () => {
    renderWithRoute(<App />);
    const pokemonDatails = screen.getByRole('link', { name: /more details/i });
    expect(pokemonDatails).toBeDefined();
  });

  it(`Verifica se ao clicar no botão de detalhes é redirecionado 
    para a pagina de detalhes`, () => {
    renderWithRoute(<App />);
    const pokemonDatails = screen.getByRole('link', { name: /more details/i });
    expect(pokemonDatails).toBeDefined();
    userEvent.click(pokemonDatails);

    const text = screen.getByText(/pokémon favoritado\?/i);
    expect(text).toBeDefined();
  });

  it('Verifica se ao clicar no link, a URL da pagina muda para "/pokemon/<id>"', () => {
    const { history } = renderWithRoute(<App />);
    const pokemonDatails = screen.getByRole('link', { name: /more details/i });
    expect(pokemonDatails).toBeDefined();
    userEvent.click(pokemonDatails);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Verifica se é renderizado o botão de favoritar corretamente', () => {
    renderWithRoute(<App />);
    const pokemonDatails = screen.getByRole('link', { name: /more details/i });
    expect(pokemonDatails).toBeDefined();
    userEvent.click(pokemonDatails);

    const favorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(favorite).toBeDefined();
    userEvent.click(favorite);

    const favoritePokemon = screen.getByRole('img',
      { name: /pikachu is marked as favorite/i });
    expect(favoritePokemon).toHaveAttribute('src', '/star-icon.svg');
    expect(favoritePokemon).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
