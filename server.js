const dotenv = require('dotenv'); 
dotenv.config( { path: './config.env'}); 

const mongoose = require('mongoose'); 
const dbUrl = process.env.DB_URL; 

const connOptions = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
};

mongoose.connect(dbUrl, connOptions) 
.then( () => {
    console.log("Successfully connected to Atlas Database."); 
})
.catch( (e) => {
    console.log(`Connection to Atlas Errored Out. ${e}`); 
}); 

const app = require('./app')

const port = process.env.PORT; 
const server = app.listen(port, (req, res) => {
    console.log(`App running on port ${port}`); 
})