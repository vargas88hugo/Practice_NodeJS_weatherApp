const axios = require('axios')

/**
 * This is an Async/Await function that is an extension of promises. The function wait
 * by the response of the weather API and comunicate it with the app.js
 * @param {string} direction - direction from the command line arguments
 * @return {object} an object that has direction, latitude and longitude  
 */
let getLocation = async(direction) => {
    const encode = encodeURI(direction) // method that encodes a URI to be compatible with the URL
    
    /**
     * Here I create a new instance with a custom configuration in the header
     */
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encode}`,
        headers: {'x-rapidapi-key': '5a139472c7msh46d701b0859675ep1976d5jsn2641a9a4f6d8'}
    });
    
    let resp = await instance.get() // I make a request and wait for the async
    if (resp.data.Results.length == 0) {
        throw new Error(`There is no results to ${direction}`)
    }

    return {
        direction: resp.data.Results[0].name,
        lat: resp.data.Results[0].lat,
        lon: resp.data.Results[0].lon
    }
}

module.exports = {
    getLocation
}
