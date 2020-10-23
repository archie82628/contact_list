// require the library
  const mongoose = require('mongoose');

// connect to database
  mongoose.connect('mongodb+srv://conatct:tzeFZ7Se94Rb7Kvk@cluster0.dvxi4.mongodb.net/contacts?retryWrites=true&w=majority');

// acquire the connection (to check if it is successful)
 const db = mongoose.connection;

// // error
db.on('error', console.error.bind(console , 'error conneecting to db'));

// up and running then print the msg
 db.once('open' , function(){
    console.log('successfully connected to the database')
 });


 