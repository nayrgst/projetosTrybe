import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((vrf) => (
          <MissionCard
            key={ vrf.name }
            name={ vrf.name }
            year={ vrf.year }
            country={ vrf.country }
            destination={ vrf.destination }
          />
        ))}
      </div>);
  }
}

export default Missions;
