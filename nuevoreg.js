//adquiere las librerias necesarias
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
//const sqlite3 = require('sqlite3').verbose();


// La función tiene como parámetro el request y el response.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Define la respuesta
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};

app.post('/', function (req, res) {
  console.log("Recibiendo POST.");

let temp="";
let hum="";
if(!req.body.SensorCode) {
  temp='sin registro';
 } else{
  temp=req.body.Value;
  hum=req.body.Type;
 };
 console.log('Temperatura: '+temp+'  Humedad: '+hum);
 console.log(req.bodyparser);
 let respuesta = {
 error: false,
 codigo: 200,
 mensaje: 'Temperatura: '+temp+'  Humedad: '+hum
};
 
 res.send(respuesta);
 });
// open the database

// Correr el servidor con el puerto 8999.
app.listen(9000, () => {
 console.log("El servidor está inicializado en el puerto 9000");
 });
