var sqlite3 = require('sqlite3').verbose();

//Open database, or create if it doesn't exist
var db = new sqlite3.Database('./links.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) -> {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the in-memory SQlite Database.');
});

//Close database healthily
// db.close((err) => {
//   if (err) {
//     return console.error(err.message;)
//   }
//   console.log('Closed database connection');
// });

db.run("CREATE TABLE IF NOT EXISTS links(" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "link varchar(500) NOT NULL);",
    function(err) {
      if (err)
        throw err;

      console.log("Created links list if it didn't exist already")
    });

//var query = "INSERT INTO links(link) VALUES (\"https://github.com/MoldingTofu\");"

//non scrubed querys
//var get = "SELECT link FROM links WHERE id = x";
//var create = "INSERT INTO links(link) VALUES (\"x\")";

module.exports = db;
