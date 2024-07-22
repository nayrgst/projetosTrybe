SELECT `user`.name `usuario`,
CASE WHEN MAX(YEAR(history.history_name)) >= 2021 THEN 'Usuário ativo'
    ELSE 'Usuário inativo'
END `condicao_usuario`
FROM SpotifyClone.`user` `user`
JOIN SpotifyClone.history `history`
ON history.user_id = `user`.user_id
GROUP BY `user`.name;
