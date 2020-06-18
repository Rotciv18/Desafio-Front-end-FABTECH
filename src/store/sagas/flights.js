import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Types as FlightsTypes, Creators as FlightsActions } from '../ducks/flights';

function* getFlights() {
  try {
    const response = yield call(api.get, 'flights');

    yield put(FlightsActions.getFlightsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* registerFlight(action) {
  try {
    yield call(api.post, 'flights', action.flight);
    yield put(FlightsActions.registerFlightSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeLatest(FlightsTypes.GET_FLIGHTS_REQUEST, getFlights);
  yield takeLatest(FlightsTypes.REGISTER_FLIGHT_REQUEST, registerFlight);
}
