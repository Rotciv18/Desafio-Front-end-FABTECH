import React from 'react';

import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Loading from 'react-loading-animation';
import { Creators as FlightsActions } from '../../store/ducks/flights';
import { checkFlightAvailability } from '../../helper/availability';

import FlightSettings from '../../components/FlightSettings';

function Edit({
  updateFlightRequest, loading, history, selectedFlight, flightList,
}) {
  function updateFlight(flight, id) {
    const error = checkFlightAvailability(flight, flightList);

    if (error) {
      alert(error);
    } else {
      updateFlightRequest(history, flight, id);
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
      <FlightSettings flight={selectedFlight} handleSubmit={updateFlight} handleCancel={handleCancel} />
    </>
  );
}

Edit.propTypes = {
  selectedFlight: PropTypes.objectOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  updateFlightRequest: PropTypes.func.isRequired,
  flightList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  selectedFlight: state.flights.selectedFlight,
  loading: state.flights.loading,
  flightList: state.flights.flightList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(FlightsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Edit));
