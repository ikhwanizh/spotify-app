const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());

//routes
const apiRoutes = express.Router();
app.use('/api', apiRoutes);

//setup routes
const playlistRoutes = require('./routes/route');
apiRoutes.use('/playlists', playlistRoutes);

module.exports = app;