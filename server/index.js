const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use('/items', require('./routes/itemsRouter'));
app.use('/item', require('./routes/itemRouter'));

app.use('*', express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
