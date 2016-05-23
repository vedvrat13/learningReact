import axios from 'axios';

const API_KEY = 'f533de20a1e2480b91ca59f0be151ee7';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    const response = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: response
    }
}
