import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRoute from './renderWithRouter';
import App from '../App';

describe('Testando o compente Pokemon Datails', () => {
  it('Verifica se as informações do pokemon são renderizadas corretamente', () => {
    renderWithRoute(<App />);
    const pokemonDatails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonDatails);
    const pokemonNameDetails = screen.getByRole('heading', { name: /pikachu details/i });
    expect(pokemonNameDetails).toBeDefined();
    expect(pokemonDatails).not.toBeInTheDocument();
    const heading = screen.getByRole('heading', { name: /summary/i });
    expect(heading).toBeDefined();
    const paragraph = screen.getByText(/this intelligent pokémon roasts hard/i);
    expect(paragraph).toBeDefined();
  });

  it(`Verifica se é renderizado corretamente na pagina os mapas com a 
  localização de cada pokemon`, () => {
    renderWithRoute(<App />);
    const pokemonDatails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonDatails);

    const heading = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(heading).toBeDefined();

    const locationText = screen.getByText(/kanto power plant/i);
    const locationText2 = screen.getByText(/kanto viridian forest/i);
    expect(locationText).toBeDefined();
    expect(locationText2).toBeDefined();

    const img = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(img).toHaveLength(2);
    expect(img[0]).toHaveAttribute('alt', 'Pikachu location');
    expect(img[1]).toHaveAttribute('alt', 'Pikachu location');
    expect(img[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(img[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Verifica se é possivel favoritar o pokemon pela pagina de detalhes', () => {
    renderWithRoute(<App />);
    const pokemonDatails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonDatails);

    const checkbox = screen.getByText(/pokémon favoritado\?/i);
    expect(checkbox).toBeDefined();
    userEvent.click(checkbox);

    const favorites = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favorites).toBeDefined();
  });
});
