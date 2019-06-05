const mongoose = require("mongoose");
const express = require("express");
const app = express();
const server = require('http').createServer(app);
const jsonParser = express.json();
const cors = require('cors');
const toJson = require('@meanie/mongoose-to-json'); 
const port = 8080;

mongoose.plugin(toJson);

require('./api/utils/dataBase.js').setUpConnection();
require('./api/models/movie.js');
require('./api/models/cinema.js');
require('./api/models/session.js');

app.use(cors())
app.use(jsonParser);
app.use('/',require('./api/routes/index'));

server.listen(port);
 