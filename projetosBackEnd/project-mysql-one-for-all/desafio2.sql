SELECT 
(SELECT COUNT(`song_name`) FROM SpotifyClone.song) `cancoes`,
(SELECT COUNT(`artist_name`) FROM SpotifyClone.artist) `artistas`,
(SELECT COUNT(`album_name`) FROM SpotifyClone.album) `albuns`;
