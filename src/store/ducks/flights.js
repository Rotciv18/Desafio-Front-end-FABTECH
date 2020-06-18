import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getFlightsRequest: [''],
  getFlightsSuccess: ['data'],
  getFlightsError: [''],
  selectFlight: ['flight'],
  registerFlightRequest: ['flight', 'history'],
  registerFlightSuccess: [''],
  registerFlightError: [''],
  updateFlightRequest: ['history', 'flight', 'id'],
  updateFlightSuccess: [''],
  updateFlightError: [''],
  removeFlightRequest: ['id'],
  removeFlightError: [''],
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

const getFlightsError = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
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

const registerFlightError = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

const updateFlightRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const updateFlightSuccess = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

const updateFlightError = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

const removeFlightRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const removeFlightError = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_FLIGHTS_REQUEST]: getFlightsRequest,
  [Types.GET_FLIGHTS_SUCCESS]: getFlightsSuccess,
  [Types.GET_FLIGHTS_ERROR]: getFlightsError,
  [Types.SELECT_FLIGHT]: selectFlight,
  [Types.REGISTER_FLIGHT_REQUEST]: registerFlightRequest,
  [Types.REGISTER_FLIGHT_SUCCESS]: registerFlightSuccess,
  [Types.REGISTER_FLIGHT_ERROR]: registerFlightError,
  [Types.UPDATE_FLIGHT_REQUEST]: updateFlightRequest,
  [Types.UPDATE_FLIGHT_SUCCESS]: updateFlightSuccess,
  [Types.UPDATE_FLIGHT_ERROR]: updateFlightError,
  [Types.REMOVE_FLIGHT_REQUEST]: removeFlightRequest,
  [Types.REMOVE_FLIGHT_ERROR]: removeFlightError,
});
