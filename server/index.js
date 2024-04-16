const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello world');
});

app.use('/api', require('./src/route'));

app.listen(PORT, () => {
console.log(`Server Running on port: ${PORT}`);
});
