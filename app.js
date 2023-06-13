const express = require('express'); 
const path = require('path'); 
const mainRouter = require('./router/mainRouter'); 

const app = express();

// Set the view engine to PUG and other middleware functions
app.set('view engine', 'pug'); 
app.use(express.static(path.join(__dirname, 'public')));    // Static File for JS
app.use(express.urlencoded( { extended: true }));           // Accessing Form Data

app.use('/', mainRouter); 

app.all('*', (req, res) => {
    res.status(404).send('No such page exists!'); 
})

module.exports = app; 
