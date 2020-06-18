import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from 'react-loading-animation';
import { Creators as FlightsActions } from '../../store/ducks/flights';

import FlightCard from '../../components/FlightCard';
import FlightListHeader from '../../components/FlightListHeader';

import { Container } from './styles';

class Main extends Component {
  componentDidMount() {
    const { getFlightsRequest } = this.props;

    getFlightsRequest();
  }

  render() {
    const { flights } = this.props;
    return (
      <>
        <h1>Vôos</h1>
        <Container>
          <FlightListHeader />
          {flights.loading ? (
            <Loading />
          ) : (
            flights.flightList
            && flights.flightList.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))
          )}
        </Container>
      </>
    );
  }
}

Main.propTypes = {
  getFlightsRequest: PropTypes.func.isRequired,
  flights: PropTypes.shape({
    flightList: PropTypes.array,
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  flights: state.flights,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(FlightsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
