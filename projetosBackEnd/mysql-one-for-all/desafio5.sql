SELECT song.song_name `cancao`,
COUNT(history.song_id) `reproducoes`
FROM SpotifyClone.song `song`
INNER JOIN SpotifyClone.history `history`
ON history.song_id = song.song_id
GROUP BY song.song_name
ORDER BY reproducoes DESC, cancao LIMIT 2;

