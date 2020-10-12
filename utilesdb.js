// General utilities functions
var exports=module.exports={};


//Add information to monogodb
exports.nuevalectura=function(SC,Dre,Tme,Pce,Vue,Tpe){


//require modules
var MongoClient = require('mongodb').MongoClient;

var util = require('util');
//setup date and time
var d = new Date();
var dia = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
var hora = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

// setup connection
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("criadb");
  var myobj = { SensorCode: SC, Day:Dre, Time:Tme, Place: Pce, Value: Vue,Type:Tpe };
  dbo.collection("granjauno").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 

};

exports.leerdb=function(){
var MongoClient = require('mongodb').MongoClient;
//MongoClient.set('useUnifiedTopology', true);
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("criadb");
  dbo.collection("granjauno").find({}).toArray(function(err, result) {
    if (err) throw err;
    resultado = result;
    console.log(result);
    
    db.close();
    return (resultado);
  });
}); 
  
};

