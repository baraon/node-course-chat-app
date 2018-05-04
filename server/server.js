const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log(`Started up at port 3000`);
});

module.exports = {app};
