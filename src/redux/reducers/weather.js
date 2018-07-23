import { FETCH_WEATHER_INITIATE, FETCH_WEATHER_COMPLETE } from '../actions/actionTypes';

const cityWeatherInitialState = { cities: [], isFetching: false };

export default function(state = cityWeatherInitialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_WEATHER_INITIATE:
      return { ...state, isFetching: true };
      // return state;
    case FETCH_WEATHER_COMPLETE:
      console.log(...state);
      return { ...state, cities: [ action.payload.data, ...state.cities ], isFetching: false };
      // return [ action.payload.data, ...state ];
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
