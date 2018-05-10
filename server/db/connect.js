const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'charlotte2',
	database: 'DBLab'
});

console.log('MySQL database connected.');

module.exports = connection;

// Query string test.
/*connection.query('SELECT ID AS solution FROM student', function (error, results, fields) {
	if (error)
		throw error;
	for (var i = 0; i < results.length; i++) {
		console.log(results[i].solution);
	}
});*/

/*connection.end(function(err) {
	if (err) {
		return console.log('error:' + err.message);
	}
	console.log('Close the database connection.');
});
*/