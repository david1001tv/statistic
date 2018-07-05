const express = require('express');

const router = express.Router();
const {
    inserter,
} = require('../controllers/db/inserter');

const {
    selecterAll,
    selecterNew,
} = require('../controllers/db/select')

/*
 /api/auth/
 */

router.post('/insert', inserter);
router.get('/select/all', selecterAll);
router.get('/select/new', selecterNew);

module.exports = router;