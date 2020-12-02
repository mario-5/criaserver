//adquiere las librerias necesarias
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var   mongo=require('./utilesdb.js'); //DB Connection functions



// La función tiene como parámetro el request y el response.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Define la respuesta
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: 'del let'
};

app.post('/', function (req, res) {



if(!req.body.SensorCode) {
     respuesta = {
      error: true,
      codigo: 400,
       mensaje: 'Mensaje invalido '
                   }; 
                   }else {
     			respuesta = {
      			error: false,
      			codigo: 200,
      			mensaje: req.body.SensorCode+" " +
               	req.body.Day+" "+
               	req.body.Time + " "+
               	req.body.Place+ " " +
               	req.body.Value + " " +
               	req.body.Type + " "                
                      			};
                       mongo.nuevalectura (
                       		req.body.SensorCode,
               			req.body.Day,
               			req.body.Time,
               			req.body.Place,
               			req.body.Value,
               			req.body.Type);    
                          };
 
 
// console.log(respuesta);

 
 res.send(respuesta);
 });

app.get('/', function (req, res) {

var ToFind =" ";
ToFind = req.body.TFind;
console.log ('respondo el get '+req.body);
var MongoClient = require('mongodb').MongoClient;
//MongoClient.set('useUnifiedTopology', true);
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("criadb");
  dbo.collection("granjauno").find({ToFind}).toArray(function(err, result) {
    if (err) throw err;
    var vuelta = result;
    //console.log(result);
    db.close();
    res.send(result);
  });
}); 


});
// Correr el servidor con el puerto 8999.
app.listen(9000, () => {
 console.log("El servidor está inicializado en el puerto 9000");
 });
