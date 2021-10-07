// setup for express
let express = require('express');
let app = express();

// get a ref to the location route module
const getLocation = require('./routes/location');
const getWeather = require('./routes/weather');

// setup to listen for requests
const port = 3001;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

//
// endpoint/route handling
//

// Route for city info endpoint
// app.get('/location/:cityname', getLocation);
app.use('/location',getLocation);

// Route for weather info endpoint
app.get('/weather/:lng/:lat', getWeather);


