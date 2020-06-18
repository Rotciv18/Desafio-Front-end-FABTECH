import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getFlightsRequest: [''],
  getFlightsSuccess: ['data'],
});

const INITIAL_STATE = {
  flightList: [],
  selectedFlight: {},
  loading: false,
};

const getFlightsRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const getFlightsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  flightList: [
    ...action.data,
  ],
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_FLIGHTS_REQUEST]: getFlightsRequest,
  [Types.GET_FLIGHTS_SUCCESS]: getFlightsSuccess,
});
