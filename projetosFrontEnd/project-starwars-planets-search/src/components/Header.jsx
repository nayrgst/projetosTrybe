import React, { useContext } from 'react';
import contextApp from '../context/contextApp';

export default function Header() {
  const { filterName } = useContext(contextApp);

  return (
    <header>
      <h1>Projetc StarWars</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ filterName }
      />
    </header>
  );
}
