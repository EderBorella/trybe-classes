SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id;

SELECT it_prog FROM hr.employees;