SELECT mo.*, bo.rating
FROM pixar.movies mo
INNER JOIN pixar.box_office bo
ON mo.id = bo.movie_id
WHERE bo.rating > 8.0
AND mo.theater_id IS NOT NULL;