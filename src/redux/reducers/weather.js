import { FETCH_WEATHER_INITIATE, FETCH_WEATHER_COMPLETE } from '../actions/actionTypes';

const cityWeatherInitialState = { cities: [], isFetching: false };

export default function(state = cityWeatherInitialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_INITIATE:
      return { ...state, isFetching: true };
    case FETCH_WEATHER_COMPLETE:
      const cities = (action.data.cod === "200" ? [ action.data, ...state.cities ] : [...state.cities]);
      return { ...state, cities: cities, isFetching: false };
    default:
      return state;
  }
}
