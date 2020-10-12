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
 
 
 console.log(respuesta.mensaje);

 
 res.send(respuesta);
 });

app.get('/', function (req, res) {

registros = mongo.leerdb();

res.send(registros);
});
// Correr el servidor con el puerto 8999.
app.listen(9000, () => {
 console.log("El servidor está inicializado en el puerto 9000");
 });
