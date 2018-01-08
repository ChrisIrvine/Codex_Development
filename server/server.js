const express = require ('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const PORT = process.env.PORT || '3000';
const path = require('path');
app.use(helmet());

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//app.use((req, res, next) => {
//    res.header('Content-Type', 'application/json');
//    next();
//});

app.listen(PORT, () => console.log(`Codex Backend Running against ${PORT}`));

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', '/build/index.html'));
});