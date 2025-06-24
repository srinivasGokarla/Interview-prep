// SELECT product_id from products where low_fats = 'Y' AND recyclable = 'Y'

//SELECT name FROM customer WHERE  referee_id != 2 OR referee_id IS NULL

// SELECT name, population, area  FROM world WHERE population >= 25000000 OR area >= 3000000

// SELECT DISTINCT author_id AS id FROM Views WHERE author_id = viewer_id ORDER BY id;


// SELECT tweet_id FROM tweets WHERE LENGTH(content) > 15;

// SELECT EmployeeUNI.unique_id, Employees.name FROM Employees LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id

// SELECT Product.product_name, Sales.year, Sales.price FROM Sales LEFT JOIN Product ON Sales.product_id = Product.product_id;

// SELECT v.customer_id, COUNT(*) AS count_no_trans FROM Visits v  LEFT JOIN Transactions t ON v.visit_id = t.visit_id WHERE t.transaction_id IS NULL GROUP BY v.customer_id;


// // SELECT w1.id
// FROM Weather w1
// JOIN Weather w2 
//   ON DATEDIFF(w1.recordDate, w2.recordDate) = 1
// WHERE w1.temperature > w2.temperature;
