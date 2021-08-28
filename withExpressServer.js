const express = require('express');
const myApp = express();
const PortNumber = 8080;

myApp.get('/', (req, res) => {
  res.send('This is with express');
});
myApp.listen(PortNumber, () => {
  console.log(`This will run on:${PortNumber}/`);
});
