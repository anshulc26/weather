import Axios from 'axios';
import ConfigMain from '../../configs/main';
import { FETCH_WEATHER_INITIATE, FETCH_WEATHER_COMPLETE } from './actionTypes';

export function weatherFetchInitiate() {
  return {
    type: FETCH_WEATHER_INITIATE,
  };
}

export function weatherFetchComplete(data) {
  return {
    type: FETCH_WEATHER_COMPLETE,
    data: data,
  };
}

export function fetchWeather(city) {
  return function action(dispatch) {
    //async action entry point
    dispatch(weatherFetchInitiate());

    const url = `${ConfigMain.getWeatherApiUrl()}&q=${city},in`;
    // const request = Axios.get(url);
    // dispatch(weatherFetchComplete(request));
    return Axios.get(url)
      .then(function(response) {
        dispatch(weatherFetchComplete(response));
      })
      .catch(function(error) {
        dispatch(weatherFetchComplete(error));
      });
  };
}
