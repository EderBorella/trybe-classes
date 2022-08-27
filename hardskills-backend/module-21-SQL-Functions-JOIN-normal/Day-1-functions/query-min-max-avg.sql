SELECT MIN(length) AS minima, AVG(length) AS media, MAX(length) AS maxima FROM sakila.film
WHERE release_year = 2006;