const express = require('express');

const router = express.Router();
router.get('/', (request, response, next) => {
    response.send('<h1>The "/shop" namespace route!</h1>');
})

module.exports = router;