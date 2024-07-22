SELECT 
  artist.artist_name `artista`,
  album.album_name `album`
FROM SpotifyClone.artist `artist`
INNER JOIN SpotifyClone.album `album`
ON artist.artist_name = 'Walter Phoenix'
AND album.artist_id = artist.artist_id
ORDER BY album;
