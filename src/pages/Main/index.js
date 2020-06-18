import React from 'react';

import FlightCard from '../../components/FlightCard';
import FlightListHeader from '../../components/FlightListHeader';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <FlightListHeader />
      <FlightCard />
    </Container>
  );
}

export default Main;
