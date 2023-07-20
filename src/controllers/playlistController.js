const PlaylistService = require('../services/playlistService');

class PlaylistController {
    static async getAll(req, res) {
        try {
            const playlists = await PlaylistService.getAll();
            return res.status(200).json(playlists);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
    static async sortByPlayed(req, res) {
        try {
            const playlists = await PlaylistService.sortByPlayed();
            return res.status(200).json(playlists);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = PlaylistController;