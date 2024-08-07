const mysql = require("mysql2");


let config = {
    host: "localhost",        // Replace with your database hostname
    user: "root",             // Replace with your database username
    password: "PASSWORD",    // Replace with your database password
    database: "dbs",          // Replace with your database name
};

  const connection = mysql.createConnection(config);


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Database is connected');
});

function queryCallback(sql, values, callback) {
    connection.query(sql, values, callback);
}

// Function to execute queries using promises
function queryPromise(sql, values) {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, function(err, results, fields) {
            if (err) {
                reject(err);
            } else {
                resolve([results, fields]);
            }
        });
    });
}

module.exports = {
    connection: connection,
    queryCallback: queryCallback,
    queryPromise: queryPromise
};