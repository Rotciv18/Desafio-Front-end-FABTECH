import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Types as FlightsTypes, Creators as FlightsActions } from '../ducks/flights';

function* getFlights() {
  try {
    const response = yield call(api.get, 'flights');

    yield put(FlightsActions.getFlightsSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(FlightsActions.getFlightsError());
  }
}

function* registerFlight(action) {
  try {
    yield call(api.post, 'flights', action.flight);
    yield put(FlightsActions.registerFlightSuccess());

    const { history } = action;
    history.push('/');
  } catch (error) {
    console.log(error);
    yield put(FlightsActions.registerFlightError());
  }
}

function* updateFlight(action) {
  const { history, flight, id } = action;

  try {
    yield call(api.put, `flights/${id}`, flight);
    yield put(FlightsActions.updateFlightSuccess());

    history.push('/');
  } catch (error) {
    console.log(error);
    yield put(FlightsActions.updateFlightError());
  }
}

function* removeFlight(action) {
  const { id } = action;

  try {
    yield call(api.delete, `flights/${id}`);
    yield put(FlightsActions.getFlightsRequest());
  } catch (error) {
    console.log(error);
    yield put(FlightsActions.removeFlightError());
  }
}

export default function* () {
  yield takeLatest(FlightsTypes.GET_FLIGHTS_REQUEST, getFlights);
  yield takeLatest(FlightsTypes.REGISTER_FLIGHT_REQUEST, registerFlight);
  yield takeLatest(FlightsTypes.UPDATE_FLIGHT_REQUEST, updateFlight);
  yield takeLatest(FlightsTypes.REMOVE_FLIGHT_REQUEST, removeFlight);
}
