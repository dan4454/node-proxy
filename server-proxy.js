/*

Reverse Proxy!

This is not related to server2.js. These are examples of a reverse proxy. The code is
incredibly small to do this. And it works great.


*/

var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

console.clear();

//// https://something.com/test/getdata redirects to  http://localhost.com:47298/test/getdata
// app.use('/test',
//   proxy({ target: 'http://localhost:47289/', changeOrigin: true })
// );

//// https://something.com/aaa/test redirects to  http://localhost.com:47298/test
//// (the '/aaa' gets dropped on the way)
// app.use('/aaa/**',
//   proxy({ target: 'http://localhost:47289/', changeOrigin: true,
//   pathRewrite: {'^/aaa' : ''} })
// );

app.use('/',
    proxy({
        target: 'http://localhost:47289/', changeOrigin: true,
        // pathRewrite: { '^/aaa': '' }
    })
);

//// using jsonplaceholder
//// https://something.com/jp/posts redirects to  https://jsonplaceholder.typicode.com/posts

// app.use('/jp',
//     proxy({
//         target: 'https://jsonplaceholder.typicode.com/', changeOrigin: true,
//         pathRewrite: { '^/jp': '' }
//     })
// );


app.listen(3000);
console.log('listening on port 3000');
