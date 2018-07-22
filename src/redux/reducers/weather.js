import { FETCH_WEATHER_INITIATE, FETCH_WEATHER_COMPLETE } from '../actions/actionTypes';

// const cityWeatherInitialState = { cities: {}, isFetching: false };

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER_INITIATE:
      // return { ...state, isFetching: true };
      return state;
    case FETCH_WEATHER_COMPLETE:
      // return { ...state, cities: action.payload.data, isFetching: false };
      return [ action.payload.data, ...state ];
    default:
      return state;
  }
}

// const cityWeatherInitialState = { activities: {}, isFetching: false };

// export function cityWeather(state = cityWeatherInitialState, action) {
//   switch (action.type) {
//     case FETCH_WEATHER_INITIATE:
//       return { ...state, isFetching: true };
//     case FETCH_WEATHER_COMPLETE:
//       return { ...state, activities: action.activities, isFetching: false };
//     default:
//       return state;
//   }
// }
