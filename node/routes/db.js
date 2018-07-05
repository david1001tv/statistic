const express = require('express');

const router = express.Router();
const {
    inserter,
} = require('../controllers/db/inserter');

const {
    selecter,
} = require('../controllers/db/select')

/*
 /api/auth/
 */

router.post('/insert', inserter);
router.get('/select', selecter);

module.exports = router;