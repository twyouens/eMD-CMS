const express = require("express");
const app = express();
var path = require('path');
require('dotenv').config()
const manageRoutes = require('./src/routes/manage')
const publicRoutes = require('./src/routes/public')
const connect = require('./src/services/db.service');
const cookieParser = require('cookie-parser');

const bp = require('body-parser')
app.set('views', path.join(__dirname, 'src/views')); 
app.set('view engine', 'ejs');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cookieParser());
app.use('/manage', manageRoutes)
app.use('/', publicRoutes)
connect();
app.listen(process.env.APP_PORT, ()=>{console.log(`Server started! vist: http://${process.env.APP_HOST}:${process.env.APP_PORT}`)})