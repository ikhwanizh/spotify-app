const express = require('express');
const PlaylistController = require('../controllers/playlistController');

const router = express.Router();

router.get('/', PlaylistController.getAll);
router.get('/sort', PlaylistController.sortByPlayed);
router.get('/:id', PlaylistController.getPlaylistById);

module.exports = router;