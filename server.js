const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const {MainRoutes} = require('./app/main');

const app = express();
const PORT = 8888;
app.use(compression());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

MainRoutes(app);

app.listen(PORT,() =>{
   console.log('Listen to ',PORT)
});