SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog';

SELECT * FROM hr.employees;