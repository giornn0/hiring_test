const express = require('express');
const { saveGameData, getSaves } = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);
router.get('/', getSaves);

module.exports = router;
