SELECT 
  artist.artist_name `artista`,
  album.album_name `album`,
COUNT(follower.user_id) `seguidores`
FROM SpotifyClone.artist `artist`
INNER JOIN SpotifyClone.album `album`
ON album.artist_id = artist.artist_id
INNER JOIN SpotifyClone.follower `follower`
ON follower.artist_id = artist.artist_id
GROUP BY artista, album
ORDER BY seguidores desc, artista, album;
