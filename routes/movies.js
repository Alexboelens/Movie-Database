const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const key = config.get('apiKey');

// /movies/trending
// get all trending movies
router.get('/trending', async (req, res) => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`);
    return res.status(200).send(response.data);
});

// /movies/:id
// GET movies by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos,images,reviews,similar,credits`)
    return res.status(200).send(response.data);
});

// /movies/playing
// GET movies that are now playing
router.get('/playing/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}&region=us`);
    return res.status(200).send(response.data);
});

// /movies/popular
// GET all popular movies
router.get('/popular/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}&region=us`);
    return res.status(200).send(response.data);
});

// /movies/upcoming
// GET all upcoming movies
router.get('/upcoming/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}&region=us`);
    return res.status(200).send(response.data);
});

// /movies/topRated
// GET all top rated movies
router.get('/topRated/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${page}&region=us`);
    return res.status(200).send(response.data);
});


module.exports = router;