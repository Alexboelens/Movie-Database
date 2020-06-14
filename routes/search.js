const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const key = config.get('apiKey');


// search/:query/:page
// search the database and return results
router.get('/:query/:page', async (req, res) => {
    try {
        const { query, page } = req.params;
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`);
        return res.status(200).send(response.data);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

module.exports = router;