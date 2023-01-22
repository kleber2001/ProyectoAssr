const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://kgnunez:9yrAHTDOLmFyaYmY@cluster0.kesacsi.mongodb.net/connection_ssh?retryWrites=true&w=majority', {
    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');


