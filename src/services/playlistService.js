const PlaylistRepository = require('../repository/playlistRepository');

class PlaylistService {
    static getAll() {
        return PlaylistRepository.getAll();
    }
    static sortByPlayed() {
        const playlists = PlaylistRepository.getAll();
        return playlists.sort((a, b) => b.played - a.played);
    }

}

module.exports = PlaylistService;