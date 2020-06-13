const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const key = config.get('apiKey');

// /tv/trending
// get all trending tv shows
router.get('/trending', async (req, res) => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`);
    return res.status(200).send(response.data);
});

// /tv/:id
// GET tv shows by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&append_to_response=videos,reviews,similar,credits`)
    return res.status(200).send(response.data);
});


// /tv/popular
// get tv shows that are airing today
router.get('/popular/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=${page}`);
    return res.status(200).send(response.data);
});


// /tv/onTv
// get tv shows that are on tv right now
router.get('/onTv/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=${page}`);
    return res.status(200).send(response.data);
});


// /tv/playing
// get tv shows that are airing today
router.get('/playing/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=${page}`);
    return res.status(200).send(response.data);
});


// /tv/topRated
// get top rated tv shows
router.get('/topRated/:page', async (req, res) => {
    const { page } = req.params;
    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=${page}`);
    return res.status(200).send(response.data);
});






module.exports = router;

