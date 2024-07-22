import React, { useContext } from 'react';
import contextApp from '../context/contextApp';
import Loading from './Loading';

const maior = 'maior que';
const menor = 'menor que';
const igual = 'igual a';

export default function Table() {
  const { load, data, filterByName, filterNumbers } = useContext(contextApp);
  const infos = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL'];

  const filterByNumbers = () => {
    let infoData = data;
    filterNumbers.forEach((items) => {
      const { values, column, comparison } = items;
      infoData = infoData.filter((nmrs) => {
        if (comparison === maior) {
          return Number(nmrs[column]) > Number(values);
        }
        if (comparison === menor) {
          return Number(nmrs[column]) < Number(values);
        }
        if (comparison === igual) {
          return Number(nmrs[column]) === Number(values);
        }
        return infoData;
      });
    });
    return infoData;
  };

  return (
    <main>
      { load === true ? (<Loading />) : (
        <table>
          <thead>
            <tr>
              { infos.map((info, index) => <th key={ index }>{info}</th>) }
            </tr>
          </thead>

          <tbody>
            {
              filterByNumbers()
                .filter((filterName) => filterName.name.toLowerCase()
                  .includes(filterByName.name))
                .map((item) => (
                  <tr key={ item.name } id={ item.name }>
                    <td>{item.name}</td>
                    <td>{item.rotation_period}</td>
                    <td>{item.orbital_period}</td>
                    <td>{item.diameter}</td>
                    <td>{item.climate}</td>
                    <td>{item.gravity}</td>
                    <td>{item.terrain}</td>
                    <td>{item.surface_water}</td>
                    <td>{item.population}</td>
                    <td>{item.residents}</td>
                    <td>{item.films}</td>
                    <td>{item.created}</td>
                    <td>{item.adited}</td>
                    <td>{item.url}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      ) }
    </main>
  );
}
