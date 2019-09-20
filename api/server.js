// setting up a logger
const log = require('debug')('api:logging');
// requried express app
const app = require('./app');
// set up port variable, from environment variable or hard coded 4000
const port = process.env.PORT || 4000;
// start the server and log the port being used.
app.listen(port, () => log(`API listening on port: ${port}`));
