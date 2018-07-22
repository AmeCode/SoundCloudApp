
const express = require('express');
var path=require('path');
const app = express();


const port =process.env.PORT || '5000';

app.use(express.static(__dirname + '/public'));
app.get('/[^\.]+$',function (req, res) {
  res.set('Content-Type','text/html')
    .sendFile(path.join((__dirname, '/public/index.html')))
});
app.listen(app.get('port'));
