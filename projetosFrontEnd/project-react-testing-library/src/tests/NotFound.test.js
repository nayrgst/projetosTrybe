import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRoute from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testando o componente NotFound', () => {
  it('Testa se a pagina contém um H2 com o texto Page requested not found 😭', () => {
    renderWithRoute(<NotFound />);
    const notFound = screen.getByRole('heading',
      { name: /page requested not found Crying emoji/i });
    expect(notFound).toBeDefined();
  });

  it('Testa se a pagina contém a imagem do pikachu', () => {
    renderWithRoute(<NotFound />);
    const img = screen.getByRole('img', { name: /pikachu crying/i });
    expect(img).toBeDefined();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
