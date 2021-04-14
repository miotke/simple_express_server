/* 
router.js contains all the list of all routes for
a particular web app. This helps separate routes 
from the actual server code. 
*/

// Imports
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from router.js');
});

router.get('/new', (req, res) => { 
    res.send('Hello from /new');
});

module.exports = router;
