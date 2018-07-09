const express = require('express');

const router = express.Router();
const {
    inserter,
    deleter,
    updater
} = require('../controllers/db/IDU');

const {
    selecter,
} = require('../controllers/db/select')

/*
 /api/auth/
 */

router.post('/insert', inserter);
router.post('/delete', deleter);
router.post('/update', updater);
router.get('/select', selecter);

module.exports = router;