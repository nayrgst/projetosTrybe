SELECT
  MIN(plan.plan_price) `faturamento_minimo`,
  MAX(plan.plan_price) `faturamento_maximo`,
  ROUND(AVG(plan.plan_price), 2) `faturamento_medio`,
  SUM(plan.plan_price) `faturamento_total`
FROM SpotifyClone.plan `plan`
INNER JOIN SpotifyClone.user `user`
ON user.plan_id = plan.plan_id;
