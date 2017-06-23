//var express = require('express');
//var path = require('path');
//var open = require('open');
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

/* eslint-disable no-console */

//var port = 3000;
//var app = express();
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
    res.json([
        { "id": 1, "firstname": "vadim", "lastname": "i", "email": "vi@ru.ru" },
        { "id": 2, "firstname": "op", "lastname": "p", "email": "op@ru.ru" },
        { "id": 3, "firstname": "n", "lastname": "L", "email": "NL@ru.ru" }
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});