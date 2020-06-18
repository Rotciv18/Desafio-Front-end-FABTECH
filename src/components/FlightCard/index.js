import React from 'react';
import Proptypes from 'prop-types';

import { MdEdit } from 'react-icons/md';

import { Container } from './styles';

function FlightCard({ flight }) {
  const origin = `${flight.origin.city}, ${flight.origin.country}`;
  const destiny = `${flight.destiny.city}, ${flight.destiny.country}`;

  return (
    <Container>
      <span>
        {origin}
      </span>
      <span>
        {destiny}
      </span>
      <span>
        {flight.date}
      </span>
      <div>
        <MdEdit />
      </div>
    </Container>
  );
}

FlightCard.propTypes = {
  flight: Proptypes.objectOf(Proptypes.any).isRequired,
};

export default FlightCard;
