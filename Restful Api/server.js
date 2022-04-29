/*
* Author: Emediong Useh 

* Date-Created: Wednesday, April 27th

* Primary file for API
*/


const http = require('http');

const url = require('url')

const express = require('../Express/server')

const server = http.createServer((req, res) => {
    
    
    // get url and parse
    const parsedUrl = url.parse(req.url, true);

    // get path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Get query string as an object
    const queryStringObject = parsedUrl.query
    console.log(queryStringObject);

    // get method
    const method = req.method.toUpperCase()

    // get headers
    const headers = req.headers['accept-language']
    console.log('Request headers are:' + headers);

    // send response
    res.end('Welcome');

    console.log('Request path :'+ trimmedPath + 'with method'+method +'; query string paramms');
})


server.listen(5000, () => console.log('Server listening on port ==> https://localhost:5000'))