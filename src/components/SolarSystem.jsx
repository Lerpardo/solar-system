import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planets" />
      {planets
        .map((e) => (<PlanetCard
          planetName={ e.name }
          planetImage={ e.image }
          classDet={ e.class }
          key={ e.name }
        />))}
    </div>
  );
}

export default SolarSystem;
