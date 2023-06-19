const express = require("express");
const app = express();
var path = require('path');
require('dotenv').config()
const manageRoutes = require('./src/routes/manage')
const publicRoutes = require('./src/routes/public')

app.set('views', path.join(__dirname, 'src/views')); 
app.set('view engine', 'ejs');

app.use('/manage', manageRoutes)
app.use('/', publicRoutes)

app.listen(process.env.APP_PORT, ()=>{console.log(`Server started! vist: http://${process.env.APP_HOST}:${process.env.APP_PORT}`)})