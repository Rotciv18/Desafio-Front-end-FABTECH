import React from 'react';

import { Container, Separator } from './styles';

function FlightListHeader() {
  return (
    <Container>
      <div>
        <span>
          Origem
        </span>
        <span>
          Destino
        </span>
        <span>
          Data
        </span>
        <span />
      </div>
      <Separator />
    </Container>
  );
}

export default FlightListHeader;
