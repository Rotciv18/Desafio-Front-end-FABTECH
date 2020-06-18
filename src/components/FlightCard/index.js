import React from 'react';

import { MdEdit } from 'react-icons/md';

import { Container } from './styles';

function FlightCard() {
  return (
    <Container>
      <span>
        Origem
      </span>
      <span>
        Destino
      </span>
      <span>
        Data
      </span>
      <div>
        <MdEdit />
      </div>
    </Container>
  );
}

export default FlightCard;
