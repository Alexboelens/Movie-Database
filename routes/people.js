const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const key = config.get('apiKey');

// /people/trending
// get all trending people
router.get('/trending', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=${key}`);
        return res.status(200).send(response.data);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

// people/:id
// get people by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&append_to_response=movie_credits`)
        return res.status(200).send(response.data);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});


// /people/popular
// get popular people
router.post('/popular/:page', async (req, res) => {
    try {
        const { page } = req.params;
        const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=${page}`);
        return res.status(200).send(response.data);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});


module.exports = router;



