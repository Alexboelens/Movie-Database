const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const key = config.get('apiKey');

// /people/trending
// get all trending people
router.get('/trending', async (req, res) => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=${key}`);
    return res.status(200).send(response.data);
});

// people/:id
// get people by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&append_to_response=movie_credits`)
    return res.status(200).send(response.data);
});


// /people/popular
// get popular people
router.post('/popular/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=${page}`);
    return res.status(200).send(response.data);
});


module.exports = router;



