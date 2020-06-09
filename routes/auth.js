const express = require('express');
const router = express.Router();



// api/auth GET
// get logged in user
// PRIVATE
router.get('/', (req, res) => {
    res.json({ msg: 'get logged in user' })
});

// api/auth/login POST
// authenticate user and get token
// PUBLIC
router.post('/login', (req, res) => {
    res.json({ msg: 'login user' })
});



module.exports = router;