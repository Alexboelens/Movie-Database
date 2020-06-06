const express = require('express');
const mongoose = require('mongoose');
const config = require('config')

const app = express();

// Body Parser MiddleWare
app.use(express.json());

// MongoDB config
const db = config.get('mongoDB_URI');

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));



// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth/', require('./routes/api/auth'));


app.listen(5000, () => console.log('Server running on port 5000'));

