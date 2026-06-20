-- Write your query below
SELECT name from customers where id NOT IN (select customer_id from orders)