SELECT user.name `usuario`,
COUNT(history.user_id) `qtde_musicas_ouvidas`,
ROUND(SUM(song.song_duration)/60,2) `total_minutos`
FROM SpotifyClone.user `user`
INNER JOIN SpotifyClone.history `history` 
ON user.user_id = history.user_id
INNER JOIN SpotifyClone.song `song`
ON song.song_id = history.song_id
GROUP BY user.name;
