SELECT th.name, th.location, mo.*
FROM pixar.theater th
RIGHT JOIN pixar.movies mo
ON th.id = mo.theater_id
ORDER BY th.name;