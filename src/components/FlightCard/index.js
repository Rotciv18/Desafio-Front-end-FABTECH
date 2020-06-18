import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Proptypes from 'prop-types';

import { MdEdit } from 'react-icons/md';

import { withRouter } from 'react-router-dom';
import { Creators as FlightsActions } from '../../store/ducks/flights';
import { Container } from './styles';

function FlightCard({ flight, selectFlight, history }) {
  function handleEditFlight() {
    selectFlight(flight);

    history.push('/edit');
  }

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
        <MdEdit onClick={() => handleEditFlight()} />
      </div>
    </Container>
  );
}

FlightCard.propTypes = {
  flight: Proptypes.objectOf(Proptypes.any).isRequired,
  selectFlight: Proptypes.func.isRequired,
  history: Proptypes.shape({ push: Proptypes.func }).isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(FlightsActions, dispatch);

export default connect(null, mapDispatchToProps)(withRouter(FlightCard));
