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
app.use('/movies', require('./routes/movies'));
app.use('/tv', require('./routes/tv'));
app.use('/people', require('./routes/people'));
app.use('/search', require('./routes/search'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));