const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.use('/items', require('./routes/itemsRouter'));
app.use('/item', require('./routes/itemRouter'));

app.use('*', express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
