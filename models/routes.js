const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://kgnunez:SKnnyIIB6dpLvqnG@cluster0.kesacsi.mongodb.net/connection_ssh', {
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


