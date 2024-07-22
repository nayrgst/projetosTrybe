import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

        {Planets.map((vrf) => (
          <PlanetCard
            key={ vrf.name }
            planetImage={ vrf.image }
            planetName={ vrf.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
