import React from 'react';
import Proptypes from 'prop-types';

import { MdEdit } from 'react-icons/md';

import { Link } from 'react-router-dom';
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
      <Link style={{ textDecoration: 'none', color: '#000' }} to="/">
        <MdEdit />
      </Link>
    </Container>
  );
}

FlightCard.propTypes = {
  flight: Proptypes.objectOf(Proptypes.any).isRequired,
};

export default FlightCard;
