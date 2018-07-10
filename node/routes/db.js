const express = require('express');

const router = express.Router();
const {
    inserter,
    deleter,
    updater
} = require('../controllers/IDU');

const {
    selecter,
} = require('../controllers/select')

/*
 /api/auth/
 */

router.post('/insert', inserter);
router.post('/delete', deleter);
router.post('/update', updater);
router.get('/select', selecter);

module.exports = router;