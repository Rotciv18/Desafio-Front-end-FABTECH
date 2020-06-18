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

export default function* () {
  yield takeLatest(FlightsTypes.GET_FLIGHTS_REQUEST, getFlights);
}
