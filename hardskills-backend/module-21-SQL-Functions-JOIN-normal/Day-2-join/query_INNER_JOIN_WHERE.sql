SELECT m.title, o.domestic_sales, o.international_sales
FROM pixar.movies m
INNER JOIN pixar.box_office o
ON m.id = o.movie_id
WHERE o.international_sales > o.domestic_sales;