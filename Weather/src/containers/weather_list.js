import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import SimpleMap from '../components/map';

class WeatherList extends Component {
    renderWeatherList(cityData) {
        const temperature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={cityData.city.id}>
                <td>
                    <SimpleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon} />
                </td>
                <td>
                    <Chart data={temperature} color='blue'/>
                </td>
                <td>
                    <Chart data={pressure} color='green'/>
                </td>
                <td>
                    <Chart data={humidity} color='red'/>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeatherList)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);
