import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import contextApp from './contextApp';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [values, setValues] = useState(0);
  const [load, setLoad] = useState(false);
  const [column, setColumn] = useState('population');
  const [filterNumbers, setFilterNumbers] = useState([]);
  const [comparison, setComparison] = useState('maior que');
  const [filterByName, setFilterName] = useState({ name: '' });

  const filterName = ({ target }) => {
    const { value } = target;
    setFilterName({
      name: value,
    });
  };

  const getApi = async () => {
    setLoad(true);
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await response.json();
    setData(results);
    setLoad(false);
  };

  useEffect(() => {
    getApi();
  }, []);

  const allValues = {
    load,
    data,
    filterByName,
    filterName,
    values,
    setValues,
    column,
    setColumn,
    filterNumbers,
    setFilterNumbers,
    comparison,
    setComparison,
  };

  return (
    <contextApp.Provider value={ allValues }>
      { children }
    </contextApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
