const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./config/cors');

const route = require('./routes');
const app = express();
const port = 5000;

//Connect database
const mongodb = require('../src/config/mongodb');
mongodb.connect();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors(corsOptions));

app.use(express.json());

route(app);

app.listen(port, () => {
    console.log(`App listenning on port http://localhost:${port}`);
})