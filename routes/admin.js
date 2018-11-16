const express = require('express');

const router = express.Router();
router.get('/', (request, response, next) => {
    response.send('<h1>The "/admin" namespace path</h1>');
})

module.exports = router; 