const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// Register new User
// Public

router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // simple validation
    if (!name || !email || !password) {
        res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing User
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User Already exists' })

            // create new user object
            const newUser = new User({
                name,
                email,
                password
            })

            // create salt and hash the password, then save the user.
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            // create jwt token with secret from config file
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
        })
})

// get all users
router.get('/all', (req, res) => {
    User.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


module.exports = router;