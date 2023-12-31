const mongoose = require('mongoose');


// connnect to databases
// mongoose.connect('mongodb://127.0.0.1/CSVMaster');

const DB = 'mongodb://localhost/CSVMaster'

    mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection successful!");
    })
    .catch((err) => console.log("no connection " + err));

// acquire the connection 
const db = mongoose.connection;

// Error 
db.once('error', console.error.bind(console,"Error in connecting to Database"));

// up and running then print the message
db.once('open', ()=> {
    console.log("Database connected successfully");
})

module.exports = db;