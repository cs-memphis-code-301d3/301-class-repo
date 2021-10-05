// setup for express
let express = require('express');
let app = express();
// Install/setup for Axios
const axios = require('axios'); // use for HTTP 

// setup to listen for requests
const port = 3001;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

//
// controller methods
//

// Get location handler
getLocation = async (req, res) => {
    // Query the locationIQ web service using the location name passed in to the endpoint
    const locQuery = `https://us1.locationiq.com/v1/search.php?key=PUT_YOUR_LOCATION_API_KEY_HERE&q=${req.params.cityname}&format=json`;
    console.log(locQuery); // sanity/debug
    // Use Axios to query the endpoint
    try {
        const result = await axios.get(locQuery); // send the request
        console.log(result.data[0]); // sanity/debug
        res.send(result.data[0]);
    } catch (error) {
        res.send(`Error fetching location info ${error}`);
    }
};

// Get weather handler
getWeather = async (req, res) => {
    const weatherQuery = `https://api.weatherbit.io/v2.0/current?key=PUT_YOUR_WEATHER_API_KEY_HERE&units=I&lat=${req.params.lat}&lon=${req.params.lng}`;
    console.log(weatherQuery); // sanity
    try {
        const result = await axios.get(weatherQuery); // send the request
        console.log(result.data.data[0]); // sanity/debug
        res.send(result.data.data[0]);        
    } catch (error) {
        res.send(`Error fetching location info ${error}`);
    }
};

//
// endpoint/route handling
//

// Route for city info endpoint
app.get('/location/:cityname', getLocation);

// app.get('/location/:cityname', (req,res) => {
//     res.send(`The City requested had ID ${req.params.cityname}`);
// });

// Route for weather info endpoint
app.get('/weather/:lng/:lat', getWeather);

// app.get('/weather/:city', (req,res) => {
//     res.send(`The Weather requested from city ${req.params.cityname}`);
// });
