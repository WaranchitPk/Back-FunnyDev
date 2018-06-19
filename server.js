const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const {MainRoutes} = require('./app/main');
const mysql = require('mysql');
const mysqlConnection = require('express-myconnection');
import {dbOptions} from './config';
const app = express();
const PORT = 8889;
app.use(compression());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//connect DB
app.use(mysqlConnection(mysql,dbOptions,'pool'));

MainRoutes(app);

//check Connection Db
// const con = mysql.createConnection(dbOptions);
// con.connect((err) =>{
//     if  (err) throw err;
//     console.log('connected success')
// });



// test(app);
app.listen(PORT,() =>{
   console.log('Listen to ',PORT)
});

