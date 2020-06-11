const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to database
connectDB();

// Body parser middleware
app.use(express.json({ extended: false }));



// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/favorites', require('./routes/favorites'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));