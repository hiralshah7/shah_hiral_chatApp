const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000;

//app.get is route handler 
// it is like genrating the request 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// creating the another route

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
});