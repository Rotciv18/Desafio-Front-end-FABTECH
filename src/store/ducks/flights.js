import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getFlightsRequest: [''],
  getFlightsSuccess: ['data'],
  selectFlight: ['flight'],
  registerFlightRequest: ['flight'],
  registerFlightSuccess: [''],
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
  loading: false,
  flightList: [
    ...action.data,
  ],
});

const selectFlight = (state = INITIAL_STATE, action) => ({
  ...state,
  selectedFlight: action.flight,
});

const registerFlightRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const registerFlightSuccess = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_FLIGHTS_REQUEST]: getFlightsRequest,
  [Types.GET_FLIGHTS_SUCCESS]: getFlightsSuccess,
  [Types.SELECT_FLIGHT]: selectFlight,
  [Types.REGISTER_FLIGHT_REQUEST]: registerFlightRequest,
  [Types.REGISTER_FLIGHT_SUCCESS]: registerFlightSuccess,
});
