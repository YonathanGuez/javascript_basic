require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()
// init middleware ==> known what is my request
const logger = (req, res, next)=>{
    console.log(res)
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
app.use(logger)

// Body parser Middleware we need this for POST end pars the Body 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Static folder : public with 2 files : about.html and index.html 
// http://localhost:3000/  => index.html
// http://localhost:3000/about.html
app.use(express.static(path.join(__dirname,'public')));

// Routes/api/members.js => router 
app.use('/api/members', require('./routes/api/members'));

// Start server
app.listen(3000 || process.env.PORT, () => {
    console.log(`Server listening`)
})