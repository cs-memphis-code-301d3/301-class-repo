const axios = require('axios');

/// to use router
const express = require("express"); // import express
const router = express.Router();

// Get location handler
getLocation = async (req, res) => {
    // Query the locationIQ web service using the location name passed in to the endpoint
    const locQuery = `https://us1.locationiq.com/v1/search.php?key=pk.c50f5eca19e1c38a645400ec7dcb01fe&q=${req.params.cityname}&format=json`;
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

getAbout = (req,res) => {
    res.send('About Me');
}

// specify match patterns
router.get('/about', getAbout); // /location/about
router.get('/:cityname', getLocation);  // we are matching /location/:cityname


module.exports = router;
