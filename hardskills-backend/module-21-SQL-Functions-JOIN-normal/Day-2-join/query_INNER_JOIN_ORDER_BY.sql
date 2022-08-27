SELECT m.title, o.rating
FROM pixar.movies m
INNER JOIN pixar.box_office o
ON m.id = o.movie_id
ORDER BY o.rating DESC;	