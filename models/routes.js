const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://kgnunez:SKnnyIIB6dpLvqnG@cluster0.kesacsi.mongodb.net/test', {
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


