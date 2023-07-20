let playlists = [
    {
        id: 1,
        name: "Playlist 1",
        songs: [
            {
                id: 1,
                name: "Song 1",
                artist: "Artist 1",
                album: "Album 1",
                duration: 100,
                timesPlayed: 0
            },
            {
                id: 2,
                name: "Song 2",
                artist: "Artist 2",
                album: "Album 2",
                duration: 200,
                timesPlayed: 0
            },
            {
                id: 3,
                name: "Song 3",
                artist: "Artist 3",
                album: "Album 3",
                duration: 300,
                timesPlayed: 0
            }
        ],
        played: 0
    },
    {
        id: 2,
        name: "Playlist 2",
        songs: [
            {
                id: 4,
                name: "Song 4",
                artist: "Artist 4",
                album: "Album 4",
                duration: 400,
                timesPlayed: 0
            },
            {
                id: 5,
                name: "Song 5",
                artist: "Artist 5",
                album: "Album 5",
                duration: 500,
                timesPlayed: 0
            },
            {
                id: 6,
                name: "Song 6",
                artist: "Artist 6",
                album: "Album 6",
                duration: 600,
                timesPlayed: 0
            }
        ],
        played: 0
    },
    {
        id: 3,
        name: "Playlist 3",
        songs: [
            {
                id: 7,
                name: "Song 7",
                artist: "Artist 7",
                album: "Album 7",
                duration: 700,
                timesPlayed: 0
            },
            {
                id: 8,
                name: "Song 8",
                artist: "Artist 8",
                album: "Album 8",
                duration: 800,
                timesPlayed: 0
            },
            {
                id: 9,
                name: "Song 9",
                artist: "Artist 9",
                album: "Album 9",
                duration: 900,
                timesPlayed: 0
            }
        ],
        played: 0
    }
]

class PlaylistRepository {
    constructor(id, name, songs, played) {
        this.id = id;
        this.name = name;
        this.songs = songs;
        this.played = played;
    }

    static getAll() {
        return playlists;
    }
}

module.exports = PlaylistRepository;