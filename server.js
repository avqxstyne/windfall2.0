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
        db.each("SELECT username, password FROM app_users", function(err, row) {
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

    function id() {
      return new Promise(function(resolve, reject) {
        let id; 
        db.each(`SELECT id FROM app_users WHERE username = ${req.body.username}`, function(err, row) {
          if (err) reject(err);
          else id = row.id
        }, function(err) {
          if (err) reject(err);
          else resolve(id);
        });
      })
    }

    /* what */
    users().then(response => {
      let nameTaken = false;
      for (let i = 0; i < response.length; i++) {
        if (response[i].username == req.body.username) {
          nameTaken = true;
        }
      }
      if (nameTaken === false) {
        db.serialize(() => {
          db.run(`INSERT INTO app_users (username, password) VALUES ("${req.body.username}", "${req.body.password}")`)
        })
        id().then(response => {
          console.log(`${response}, line 64`);
          res.json({
            "response": "success",
            "reason": "username availible, saved",
            "id": `${response}`
          });
        })
      } else {
        res.json({
          "response": "failure",
          "reason": "username already taken"
        });
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
        db.each("SELECT username, password, id FROM app_users", function(err, row) {
          if (err) reject(err);
          else users.push({
            username: row.username,
            password: row.password,
            id: row.id
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
      let id;
      for (let i = 0; i < response.length; i++) {
        if (response[i].username == req.body.username && response[i].password == req.body.password) {
          userExists = true;
          id = response[i].id;
        }
      }
      userExists === true ? (
        res.json({
          "response": "success",
          "reason": "matching username and password found",
          "id": `${id}`
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
/* =======================================================================================================================================
      noFap Goal ROUTE
   =======================================================================================================================================
*/

app.post("/nofap", (req, res) => {
  /* Configure database connection with sqlite3 */
  const db = new sqlite3.Database('./sql.db'); 
    
  
  db.run(`UPDATE app_users 
          SET nfconfigured = true 
          WHERE id = ${req.body.user_id}`)
  db.run(`UPDATE app_users
          SET nfgoal = ${req.body.day_goal}
          WHERE id = ${req.body.user_id}`)
  db.run(`UPDATE app_users
          SET nfgoalstarted = ${new Date().getTime()}
          WHERE id = ${req.body.user_id}`)

  db.close((err) => {
    if (err) return console.log(err.message);
    console.log("Closed database connection.");
  });

})
/* =======================================================================================================================================
      is nf config ROUTE  
   =======================================================================================================================================
*/
app.post("/isnfconfig", (req, res) => {
  const db = new sqlite3.Database('./sql.db');

  console.log(req.body);
    
  function isConfiguredQuery() {
    return new Promise(function(resolve, reject) {
      let isconfigured;
      db.each(`SELECT nfconfigured FROM app_users WHERE id = ${req.body.user_id}`, function(err, row) {
        if (err) reject(err);
        else isconfigured = row.nfconfigured;
      }, function(err) {
        if (err) reject(err);
        else resolve(isconfigured);
      });
    })
  }

  isConfiguredQuery().then(response => {
    res.json({
      "test": "true",
      "isnfconfigured": `${response}`
    })
  })


  db.close((err) => {
    if (err) return console.log(err.message);
    console.log("Closed database connection.");
  });

});

/* =======================================================================================================================================
       ROUTE for fetching day goal
   =======================================================================================================================================
*/

app.post("/nfgoal", (req, res) => {
  /* Configure database connection with sqlite3 */
  const db = new sqlite3.Database('./sql.db'); 
    
  function dayGoalQuery() {
    return new Promise(function(resolve, reject) {
      let arr = [];
      db.each(`SELECT nfgoal, nfgoalstarted FROM app_users WHERE id = ${req.body.user_id}`, function(err, row) {
        if (err) reject(err);
        else arr.push({
          nfgoal: row.nfgoal,
          nfgoalstarted: row.nfgoalstarted
        });
      }, function(err) {
        if (err) reject(err);
        else resolve(arr);
      });
  })}


  dayGoalQuery().then(response => {
    
    res.json({
      "dayGoal": `${response[0].nfgoal}`,
      "timeStarted": `${response[0].nfgoalstarted}`
    });
  
  })

  db.close((err) => {
    if (err) return console.log(err.message);
    console.log("Closed database connection.");
  })

})

/* =======================================================================================================================================
       ROUTE for fetching day goal
   =======================================================================================================================================
*/

app.post("/relapse", (req, res) => {
  const db = new sqlite3.Database('./sql.db'); 
    
  db.run(`UPDATE app_users
          SET nfgoalstarted = ${new Date().getTime()}
          WHERE id = ${req.body.user_id}`)

  res.send({
    "status": "all good"
  })
})