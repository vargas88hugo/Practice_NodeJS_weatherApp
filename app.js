const location = require('./location/location')

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'City address to get the city',
        demand: true
    }
}).argv;

let res = location.getLocation(argv.direction).then(console.log) // then() resumes the async function's execution
