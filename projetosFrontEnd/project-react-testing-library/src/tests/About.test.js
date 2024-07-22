import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRoute from './renderWithRouter';

describe('Testando o componente about', () => {
  it('Testa se o página contém um H2 com o texto About Pokédex', () => {
    renderWithRoute(<About />);
    const about = screen.getByRole('heading', { name: /about pokédex/i });
    expect(about).toBeDefined();
  });

  it('Testa se a pagina contém dois paragrafos', () => {
    renderWithRoute(<About />);
    const parag1 = screen.getByText(/this application simulates a pokédex/i);
    const parag2 = screen.getByText(/one can filter pokémons by type/i);
    expect(parag1).toBeDefined();
    expect(parag2).toBeDefined();
  });

  it('Testa se a página about contém um imagem', () => {
    renderWithRoute(<About />);
    const img = screen.getByRole('img', { name: /pokédex/i });

    expect(img).toBeDefined();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
