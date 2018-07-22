
const express = require('express');
var path=require('path');
const app = express();


const port =process.env.PORT || '5000';
app.set('port',port);
app.use(express.static(__dirname + '/dist'));
app.get('/[^\.]+$',function (req, res) {
  res.set('Content-Type','text/html')
    .sendFile(path.join((__dirname, '/dist/index.html')))
});
app.listen(app.get('port'));
