/*
const http = require('http');
*/ //wywalamy to jak korzystamy z expressa i zapisu app.listen

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');


// app.use to middleware, który zawsze przyjmuję trzy argumenty
// app.use((req, res, next) => {
//     console.log('first middleware');
//     next(); // alows the request to continue to the next middleware in line
// });
/*app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});*/

app.use(bodyParser.urlencoded({extended: false}));



app.use('/',(req, res, next) => {
    res.send('<h1>Hellow from Express!</h1>')
});
/*
const server = http.createServer(app);

server.listen(3000);*/ // można to zastąpić app.listen(3000)

app.listen(3000);
