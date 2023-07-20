const express = require('express');
const PlaylistController = require('../controllers/playlistController');

const router = express.Router();

router.get('/', PlaylistController.getAll);
router.get('/sort/byPlayed', PlaylistController.sortByPlayed);

module.exports = router;