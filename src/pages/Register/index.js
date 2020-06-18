import React from 'react';

import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Loading from 'react-loading-animation';
import { checkFlightAvailability } from '../../helper/availability';
import { Creators as FlightsActions } from '../../store/ducks/flights';

import FlightSettings from '../../components/FlightSettings';

function Register({
  registerFlightRequest, loading, history, flightList,
}) {
  function registerFlight(flight) {
    const error = checkFlightAvailability(flight, flightList);

    if (error) {
      alert(error);
    } else {
      registerFlightRequest(flight, history);
    }
  }

  function handleCancel() {
    history.push('/');
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <h1>Cadastrar</h1>
      <FlightSettings handleSubmit={registerFlight} handleCancel={handleCancel} />
    </>
  );
}

Register.propTypes = {
  registerFlightRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  flightList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.flights.loading,
  flightList: state.flights.flightList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(FlightsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Register));
