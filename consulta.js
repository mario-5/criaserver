//adquiere las librerias necesarias
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();


// La función tiene como parámetro el request y el response.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Define la respuesta
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};

app.get('/', function (req, res) {
  console.log("Página de inicio...")

let Cwhere="";
if(!req.body.cwhere) {
  Cwhere='WHERE Day="2019-07-07"';
 } else{
  Cwhere=req.body.cwhere;
 };
 console.log(Cwhere);
  
// open the database
let db = new sqlite3.Database('SensorPollo.db');

// Inicializa y define la sentencia SQL
let sql = "";
 sql = 'SELECT  Day, Time, Type, Value  FROM SensorData '+Cwhere; 
           
 console.log(sql);
// Inicializa el json de respuesta           
let query={ 

	Dia:"",
	Hora:"",
	Tipo:"T",
	Valor:0
	}	    

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  let i=0;
  rows.forEach((row) => {
   
   query [i] ={
   Dia:row.Day,Hora:row.Time,Tipo:row.Type,Valor:row.Value
   };
  // console.log(query);

   i++;  
   });

  respuesta = {
 	error: false,
 	codigo: 200,
 	mensaje: 'Temperatura y Humedad',
 	respuesta:query
 	};
  res.send(respuesta);
});

// close the database connection
db.close();
});
// Correr el servidor con el puerto 8999.
app.listen(8999, () => {
 console.log("El servidor está inicializado en el puerto 8999");
 });
