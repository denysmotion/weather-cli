import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Token not found. Add a new token -t [API_KEY]');
    }
    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    const { data } = await axios.get(url, {
        params: {
            q: city,
            appid: token,
            lang: 'ua',
            units: 'metric'
        }
    });
    return data;
}

export { getWeather };