//create crianza data base
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/criadb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// create collection of granja uno

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("criadb");
  dbo.createCollection("granjauno", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
