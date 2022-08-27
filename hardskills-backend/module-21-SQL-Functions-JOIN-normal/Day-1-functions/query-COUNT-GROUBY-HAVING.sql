SELECT department_id, COUNT(*) AS `Number_of_employees`, AVG(salary)
FROM hr.employees
GROUP BY department_id
HAVING COUNT(*) > 10;


SELECT * FROM hr.employees;