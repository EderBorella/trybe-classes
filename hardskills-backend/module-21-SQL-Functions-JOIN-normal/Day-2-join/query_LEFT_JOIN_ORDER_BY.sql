SELECT mo.*, th.name, th.location
FROM pixar.movies mo
LEFT JOIN theater th
ON mo.theater_id = th.id
ORDER BY th.name;