const express = require('express');

const app = express();

require('./database');

app.use(express.json());
app.use(require('./routes/index.routes'));

app.listen(3000);
console.log('server on port', 3000);
