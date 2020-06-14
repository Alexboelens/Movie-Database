const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Favorite = require('../models/Favorite');


// api/favorites GET
// Get the favorites with the same id as the current logged in user.
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
    check('item_id', 'Please add the id of the item').not().isEmpty(),
    check('image', 'Please add a image URL').not().isEmpty(),
    check('title', 'Please include a title').not().isEmpty(),
    check('category', 'Please add a category of person, tv or movie').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, image, category, item_id } = req.body;

    try {
        const newFavorite = new Favorite({
            user: req.user.id,
            title,
            image,
            category,
            item_id
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
        let favorite = await Favorite.findOne({ item_id: req.params.id, user: req.user.id });

        if (!favorite) return res.status(404).json({ msg: 'Favorite not found' });

        await Favorite.findOneAndRemove({ item_id: req.params.id, user: req.user.id });
        return res.status(200).json({ msg: 'Favorite deleted' });

    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});


module.exports = router;