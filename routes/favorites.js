const express = require('express');
const router = express.Router();



// api/favorites GET
// Get all users favorites
// PRIVATE
router.get('/', (req, res) => {
    res.json({ msg: 'get favorites' })
});

// api/favorites POST
// Add a favorite item
// PRIVATE
router.post('/', (req, res) => {
    res.json({ msg: 'add favorite' })
});

// api/favorites/:id DELETE
// Delete a user's favorite item
// PRIVATE
router.delete('/:id', (req, res) => {
    res.json({ msg: 'delete favorite' })
});


module.exports = router;