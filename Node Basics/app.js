const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   const url = req?.url
   const method = req.method;
   if(url === '/') {
        res.setHeader('Content-type', 'text/html'); 
        res.write('<html>'); 
        res.write('<head> <title>Enter Message </title> </head>');
        res.write('<body> <form action = "/message" method = "POST"> <input type = "text" name = "message"/> <button type= "submit"> Submit </button> </form> </body>');
        res.write('</html>');
        return res.end(); 
   }

   if(url === '/message' && method === "POST"){
        fs.writeFileSync('message.txt', 'Dummy Text');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
   }
    res.setHeader('Content-type', 'text/html'); 
    res.write('<html>'); 
    res.write('<head> <title> Node Js </title> </head>');
    res.write('<body> <h1> My First Node App </h1> </body>');
    res.write('</html>');
    res.end();
})

server.listen(3500,() => {
    console.log('This port is Configured on http://localhost:3500/');
})

// const http = require('http');

// const server = http.createServer((req, res) => {
//     // // console.log(req.url, req.method, req.headers );
//     // // process.exit();
//     // res.setHeader('Content-type', 'text/html'); // setHeader is the one of the response modify function we can modify the header details in this- 
//     //                                             // -function.
//     // res.write('<html>'); // write function is also one of the response modify function this can helps to send some data to client.
//     // res.write('<head> <title> Node Js </title> </head>');
//     // res.write('<body> <h1> My First Node App </h1> </body>');
//     // res.write('</html>');
//     // res.end(); // End is the must writen function for end to modify the response. After this end fn we never modify the responses.
// })

// server.listen(3500,() => {
//     console.log('This port is Configured on http://localhost:3500');
// })