import React, { useContext } from 'react';
import contextApp from '../context/contextApp';

export default function Filter() {
  const { values, setValues, column,
    setColumn, filterNumbers, setFilterNumbers,
    comparison, setComparison } = useContext(contextApp);
  const infos = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const operatorOptions = ['maior que', 'menor que', 'igual a'];

  const setFilterNumber = () => {
    const filters = {
      values,
      column,
      comparison,
    };
    const filterNumberValues = [...filterNumbers, filters];
    setFilterNumbers(filterNumberValues);
  };

  const removeColumn = () => {
    let newInfos = infos;
    filterNumbers.forEach((vrf) => {
      newInfos = newInfos.filter((item) => item !== vrf.column);
      return newInfos;
    });
    return newInfos;
  };

  const removeFilters = ({ target }) => {
    let newFilterNumbers = filterNumbers;
    newFilterNumbers = newFilterNumbers
      .filter((rmv) => rmv.column !== target.parentNode.firstChild.innerHTML);
    setFilterNumbers(newFilterNumbers);
  };

  const removeAll = () => {
    setFilterNumbers([]);
  };

  return (
    <div>
      <label htmlFor="columns">
        Coluna
        <select
          name="columns"
          onChange={ ({ target }) => setColumn(target.value) }
          data-testid="column-filter"
        >
          { removeColumn().map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>

      <label htmlFor="operator">
        Operador
        <select
          name="operator"
          onChange={ ({ target }) => setComparison(target.value) }
          data-testid="comparison-filter"
        >
          { operatorOptions.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>

      <label htmlFor="input">
        <input
          name="input"
          type="number"
          onChange={ ({ target }) => setValues(target.value) }
          data-testid="value-filter"
          value={ values }
        />
      </label>

      <button
        type="button"
        onClick={ setFilterNumber }
        data-testid="button-filter"
      >
        Filtrar
      </button>

      {filterNumbers.map((filters, index) => (
        <section key={ index } data-testid="filter">
          <p>{ `${filters.column}`}</p>
          <p>{`${filters.comparison}`}</p>
          <p>{`${filters.values}`}</p>
          <button type="button" onClick={ removeFilters }>X</button>
        </section>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAll }
      >
        Remover todos
      </button>
    </div>
  );
}
