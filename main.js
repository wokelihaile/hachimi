  const express = require('express');
  const app = express();
  const port = 3000;
  var name = "Ryan";
  app.get('/hachimi/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
  });
  app.get('/hachimi/somethingfun', (req, res) => {
    res.sendFile(__dirname+'/funthing.html');
  });
app.get('/whoisgay', (req, res) => {
  res.send(`${name} is gay`);
});
  app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
  });
