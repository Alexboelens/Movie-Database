const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')
const User = require('../../models/User');

// authenticate user and login
// public

router.post('/', (req, res) => {
    const { email, password } = req.body;

    // simple validation
    if (!email || !password) {
        res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing User
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exist' })

            // validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) res.status(400).json({ msg: 'Invalid credentials' });

                    // if password matches send back a token with the user info
                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token: token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        })
})

// GET api/auth/user
// get user data
// private route
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json({ user }));
})


module.exports = router;