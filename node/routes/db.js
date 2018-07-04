const express = require('express');

const router = express.Router();
const {
    inserter,
} = require('../controllers/db/inserter');

/*
 /api/auth/
 */

router.post('/insert', inserter);

module.exports = router;