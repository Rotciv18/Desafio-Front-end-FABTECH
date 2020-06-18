import React from 'react';

import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Loading from 'react-loading-animation';
import { Creators as FlightsActions } from '../../store/ducks/flights';

import FlightSettings from '../../components/FlightSettings';

function Register({ registerFlightRequest, loading, history }) {
  function registerFlight(flight) {
    registerFlightRequest(flight, history);
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
};

const mapStateToProps = (state) => ({
  loading: state.flights.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(FlightsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Register));
