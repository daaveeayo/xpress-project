require('dotenv/config')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const connect = require('./config/db')


//app.get('/about', function (req, res) {
//    res.send('About Page')
//})      

// npm init -y (this will initialize npm and would crreate node-modules folder, package.json file and also package-lock.json)
// npm i express, this woud create a server
// npm install --save-dev nodemon and do the below in your script (found in package.json file)
//   "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
//    "dev":"nodemon index",
//    "start":"node index"
//  },

// server

connect()
    .then(() => {
        try {
            app.listen(port, () => console.log(`server is connected to http://localhost:${port}`))

        } catch (error) {
            console.log('connot connect to the server');
        }
    })
    .catch((error) => {
        console.log('invalid database connection...!', error);
    })

// routes
app.get('/', function (req, res) {
    res.send('app is running')
})


app.use((req, res) => {
    res.send('that route does not exist')
})

