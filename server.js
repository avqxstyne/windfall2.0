const express = require('express');
const sqlite3 = require('sqlite3');

/* Configuring express app */
const app = express();
app.use(express.json())

/* Running on port 5000 */
const PORT = 5000;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));


/* =======================================================================================================================================
      REGISTER ROUTE
   =======================================================================================================================================
*/
app.post("/register", (req, res) => {

    /* Configure database connection with sqlite3 */
    const db = new sqlite3.Database('./sql.db'); 
    
    /* This function returns a promise of the names of every user in the db */
    function users() {
      return new Promise(function(resolve, reject) {
        let users = [];
        db.each("SELECT username FROM users", function(err, row) {
          if (err) reject(err);
          else users.push(row.username);
        }, function(err) {
          if (err) reject(err);
          else resolve(users);
        });
      })
    } 

    /* On then it checks if name is taken and inserts it */
    users().then(response => {
      if (response.includes(req.body.username)) {  
        res.json({
          "response": "failure",
          "reason": "username already taken"
        });
      } else {
        res.json({
          "response": "success",
          "reason": "username not taken, inserted into database"
        });
        db.run(`INSERT INTO users (username, password) VALUES("${req.body.username}", "${req.body.password}")`)
      }
    })

    /* Closing database connection */
    db.close((err) => {
      if (err) return console.log(err.message);
      console.log("Closed database connection.");
    });
})

/* =======================================================================================================================================
      LOGIN ROUTE
   =======================================================================================================================================
*/
app.post("/login", (req, res) => {
    const db = new sqlite3.Database('./sql.db'); 
    
    /* This function returns a promise of the names and passwords of every user in the db */
    function users() {
      return new Promise(function(resolve, reject) {
        let users = [];
        db.each("SELECT username, password FROM users", function(err, row) {
          if (err) reject(err);
          else users.push({
            username: row.username,
            password: row.password
          });
        }, function(err) {
          if (err) reject(err);
          else resolve(users);
        });
      })
    }

    /* On then it checks if name is taken and inserts it */
    users().then(response => {
      let userExists = false;
      for (let i = 0; i < response.length; i++) {
        if (response[i].username == req.body.username && response[i].password == req.body.password) {
          userExists = true;
        }
      }
      userExists === true ? (
        res.json({
          "response": "success",
          "reason": "matching username and password found"
        })
      ) : (
        res.json({
          "response": "failure",
          "reason": "username or password missing"
        })
      );
    })

    /* Closing database connection */
    db.close((err) => {
      if (err) return console.log(err.message);
      console.log("Closed database connection.");
    });
})