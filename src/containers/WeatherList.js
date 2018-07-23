import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderCity(cityData) {
    return (
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature</td>
            <td>Pressure</td>
            <td>Humidity</td>
          </tr>
        </thead>
        <tbody>
          {/* {this.props.weather.map(this.renderCity)} */}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  // isFetching: state.weather.isFetching,
  // weather: state.weather
});

export default connect(mapStateToProps)(WeatherList);
