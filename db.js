require('dotenv').config();
const mongoose = require('mongoose');

//const mongoURL = 'mongodb://localhost:27017/hotels';
//  const mongoURL = process.env.MONGO_URL_lOCAL;

const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected...');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected...');
});


module.exports = db;

