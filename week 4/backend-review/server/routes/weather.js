
const axios = require('axios');

// Get weather handler
getWeather = async (req, res) => {
    const weatherQuery = `https://api.weatherbit.io/v2.0/current?key=cf94a1d402f646699d12ac90c15cec1e&units=I&lat=${req.params.lat}&lon=${req.params.lng}`;
    console.log(weatherQuery); // sanity
    try {
        const result = await axios.get(weatherQuery); // send the request
        console.log(result.data.data[0]); // sanity/debug
        res.send(result.data.data[0]);        
    } catch (error) {
        res.send(`Error fetching location info ${error}`);
    }
};

module.exports = getWeather;