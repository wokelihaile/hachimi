  const express = require('express');
  const app = express();
  const port = 3000;
  var name = "Ryan";
  app.get('/', (req, res) => {
    res.sendFile(__dirname+'/home.html');
  });
  app.get('/somethingfun', (req, res) => {
    res.sendFile(__dirname+'/fun.html');
  });
app.get('/whoisgay', (req, res) => {
  res.send(`${name} is gay`);
});
  app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
  });
