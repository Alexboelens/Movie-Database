const express = require('express');
const router = express.Router();



// api/users POST
// Register a new user 
// PUBLIC
router.post('/', (req, res) => {
    res.json({ msg: 'register new user' })
});



module.exports = router;