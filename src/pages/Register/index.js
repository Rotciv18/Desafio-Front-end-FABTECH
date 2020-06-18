import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Creators as FlightsActions } from '../../store/ducks/flights';

import { Container } from './styles';
import FlightSettings from '../../components/FlightSettings';

function Register({ registerFlightRequest }) {
  function registerFlight(flight) {
    registerFlightRequest(flight);
  }

  return <FlightSettings handleSubmit={registerFlight} />;
}

Register.propTypes = {
  registerFlightRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(FlightsActions, dispatch);

export default connect(null, mapDispatchToProps)(Register);
