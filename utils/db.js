import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'db4free.net',  // This is a placeholder, use the actual host name
    user: 'rdhannani', // Replace with your actual username
    password: 'LTsysxLv6#P$4k8', // Replace with your actual password
    database: 'memployees' // Replace with your actual database name
});

con.connect(function(err) {
    if (err) {
        console.log("connection error", err);
    } else {
        console.log("Connected!");
    }
});

export default con;
