const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Favorite = require('../models/Favorite');


// api/favorites GET
// Get all users favorites
// PRIVATE
router.get('/', auth, async (req, res) => {
    try {
        const favorites = await Favorite.find({ user: req.user.id }).sort({ title: 1 });
        res.json(favorites);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }

});

// api/favorites POST
// Add a favorite item
// PRIVATE
router.post('/', [auth, [
    check('image', 'Please add a image URL').not().isEmpty(),
    check('title', 'Please include a title').not().isEmpty(),
    check('category', 'Please add a category of person, tv or movie').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, image, category } = req.body;

    try {
        const newFavorite = new Favorite({
            user: req.user.id,
            title,
            image,
            category
        })

        const exists = await Favorite.findOne({
            user: req.user.id,
            title
        })

        if (exists) {
            return res.status(400).json({ msg: 'Already added to favorites' })
        }
        const favorite = await newFavorite.save();

        res.json({ favorite })

    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

// api/favorites/:id DELETE
// Delete a user's favorite item
// PRIVATE
router.delete('/:id', auth, async (req, res) => {
    try {
        let favorite = await Favorite.findById(req.params.id)

        if (!favorite) return res.status(404).json({ msg: 'Favorite not found' })

        // make sure user owns the favorite
        if (favorite.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' })
        }

        await Favorite.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Favorite deleted' });

    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});


module.exports = router;