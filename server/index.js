const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes= require('./src/route')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use(bodyParser.json());

// app.get('/', function (req, res) {
//     res.send('hello world');
// });

app.use('/', routes);

app.listen(PORT, () => {
console.log(`Server Running on port: ${PORT}`);
});
