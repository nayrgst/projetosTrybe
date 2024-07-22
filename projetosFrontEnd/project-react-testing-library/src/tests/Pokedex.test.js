import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRoute from './renderWithRouter';
import App from '../App';

const testId = 'next-pokemon';
const testId2 = 'pokemon-type-button';
const testId3 = 'pokemon-name';

describe('Testa o componente pokedex', () => {
  it('Verifica se a pagina contém o texto encountered pokémons', () => {
    renderWithRoute(<App />);
    const heading = screen.getByRole('heading', { name: /encountered pokémons/i });

    expect(heading).toBeDefined();
  });

  it('Verifica se contém o texto "proximo pokémon" no botão', () => {
    renderWithRoute(<App />);
    const button = screen.getByRole('button', { name: /próximo pokémon/i });

    expect(button).toBeDefined();
  });

  it(`Verifica se ao clicar no botão de proximo é exibido
   o proximo pokémo`, () => {
    renderWithRoute(<App />);
    const nextPokemon = screen.getByTestId(testId);
    const pokemonName = screen.getByTestId(testId3);

    expect(pokemonName).toHaveTextContent('Pikachu');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Charmander');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Caterpie');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Ekans');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Alakazam');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Mew');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Rapidash');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Snorlax');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Dragonair');
    userEvent.click(nextPokemon);
    expect(pokemonName).toHaveTextContent('Pikachu');
  });

  it('Verifica se é exibido um pokémon de cada vez', () => {
    renderWithRoute(<App />);
    const pokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pokemon).toBeDefined();
  });

  it('verifica se existe um botão para cara elemento de pokémon', () => {
    renderWithRoute(<App />);
    const pokemonType = screen.getAllByTestId(testId2);

    expect(pokemonType[0]).toHaveTextContent('Electric');
    expect(pokemonType[1]).toHaveTextContent('Fire');
    expect(pokemonType[2]).toHaveTextContent('Bug');
    expect(pokemonType[3]).toHaveTextContent('Poison');
    expect(pokemonType[4]).toHaveTextContent('Psychic');
    expect(pokemonType[5]).toHaveTextContent('Normal');
    expect(pokemonType[6]).toHaveTextContent('Dragon');
  });

  it(`Verifica se ao clicar em um tipo de pokémon circula somente 
    naquele tipo de pokémon`, () => {
    renderWithRoute(<App />);
    const pokemonType = screen.getByRole('button', { name: /psychic/i });
    const nextPokemon = screen.getByTestId(testId);
    expect(pokemonType).toHaveTextContent('Psychic');
    expect(pokemonType).toBeDefined();
    userEvent.click(pokemonType);
    expect(screen.getByText(/alakazam/i)).toBeDefined();
    userEvent.click(nextPokemon);
    expect(screen.getByText(/mew/i)).toBeDefined();
  });

  it('Verifica se contém o texto "All" no botão', () => {
    renderWithRoute(<App />);
    const button = screen.getByRole('button', { name: /all/i });
    expect(button).toHaveTextContent('All');
    expect(button).toBeDefined();
  });

  it(`Verifica se ao clicar no botão "All" são exibidos todos os 
    pokémon corretamente`, () => {
    renderWithRoute(<App />);
    const button = screen.getByRole('button', { name: /all/i });
    const pokemonName = screen.getByTestId(testId3);
    expect(button).toBeDefined();
    userEvent.click(button);
    expect(pokemonName).toHaveTextContent('Pikachu');
  });

  it('Verifica se ao carregar a pagina o botão "All" está selecionado', () => {
    renderWithRoute(<App />);
    const button = screen.getByRole('button', { name: /all/i });
    expect(button).toBeDefined();
  });
});
