SELECT m.title, o.domestic_sales, o.international_sales
FROM pixar.movies m
INNER JOIN box_office o
ON m.id = o.movie_id;