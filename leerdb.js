var MongoClient = require('mongodb').MongoClient;
//MongoClient.set('useUnifiedTopology', true);
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("criadb");
  dbo.collection("granjauno").find({'Type':'T'}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 
