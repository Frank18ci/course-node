const mongoose = require('mongoose');
const { db } = require('../config');

const connection = mongoose.connect(`mongodb://${db.host}:${db.port}/${db.database}`)
.then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Error connecting to the database', err);
})

module.exports = connection