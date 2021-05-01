const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const cors = require("cors");

const mongodb = require('mongodb');
const path = require('path');

const config = require('./config');
const apiRouter = require('./app/routes/api-router');
//const authRouter = require('./app/routes/api-authentication')(express, jsonWebToken, config.secret);

//const jsonWebToken = require('jsonwebtoken');

async function startServer() {

    try {
        const app = express();

        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
            next();
        });

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(cors());
        app.use(morgan('dev'));

        app.use('/api', apiRouter(express, mongodb.MongoClient));
        //app.use('/authenticate', authRouter);

        app.use(express.static(path.join(__dirname + '/public/angular')));
    
        app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname + '/public/angular/index.html'));
        });

        app.listen(config.port);
        console.log('Running on port ' + config.port);
    } catch (err) {
        console.log(err);
    }
}

startServer();