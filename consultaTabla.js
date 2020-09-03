/**
 * http://usejsdoc.org/
 */
function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  openDB();
 
  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
 
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var contenido = retrivearow();
      var textoCelda = document.createTextNode(+contenido+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    
  }
  closeDB();
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}
/**
 * consulta a sqlite
 */
function openDB(){
	const sqlite3 = require('sqlite3').verbose();

	// open the database
	let db = new sqlite3.Database('SensorPollo.db');
}

function retrivearow(){
	
var resultado="";

	// open the e3.Database('SensorPollo.db');

	let sql = `SELECT  Day, Time, Type, Value  FROM SensorData where Type="T"
	           ORDER BY Day`;

	db.all(sql, [], (err, rows) => {
	  if (err) {
	    throw err;
	  }
	      rows.forEach((row) => {
	   //   console.log(row.Day,row.Time,row.Type,row.Value);
	    	resultado = + row.Day + row.Time + row.Type + row.Value;      
	      });
	});
	return resultado;
	}




function accesosqlite(){
const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('SensorPollo.db');

let sql = `SELECT  Day, Time, Type, Value  FROM SensorData where Type="T"
           ORDER BY Day`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
      rows.forEach((row) => {
      console.log(row.Day,row.Time,row.Type,row.Value);
 });
});

// close the database connection
db.close();
}
function DBClose(){

	// close the database connection
	db.close();
	}