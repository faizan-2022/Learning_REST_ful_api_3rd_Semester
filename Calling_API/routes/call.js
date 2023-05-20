const router = require("express").Router();
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api2/practices/apiposttest',
  method: 'POST'
};

router.get("/",(res,req) =>{
    const req = http.request(options, (res) => {
        res.status(200).send(`statusCode: ${res.statusCode}`);
      
        res.on('data', (d) => {
          process.stdout.write(d);
        });
      });
      
      req.on('error', (error) => {
        console.error(error);
      });
      
      req.end();
});

module.exports = router;