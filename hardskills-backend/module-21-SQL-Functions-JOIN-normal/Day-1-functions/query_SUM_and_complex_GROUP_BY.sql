SELECT
    SUM(amount) as `soma`,
    year(payment_date),
    month(payment_date)
FROM payment
GROUP BY
    year(payment_date),
    month(payment_date);