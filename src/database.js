const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

// mongoose.connect(URI,{useNewUrlParser: true})
//     .then(db => console.log('DB is connected'))
//     .catch(err => console.error(err));

(async() => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }, (err, res) => {
            if (err) throw err;
            console.log('Base de Datos Conectada');
        });

    } catch (err) {
        console.log('error: ' + err);
    }
})()

module.exports = mongoose;
