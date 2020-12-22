/*global require*/
/*global console*/
var express = require('express'); 
var app = express();

// Creates a server which runs on port 3000 and  
// can be accessed through localhost:3000
app.listen(8947, function() { 
    console.log('server running on port 8947'); 
} ) 

app.get('/name', function(req, res) {

    console.log('Running');

    // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    var spawn = require("child_process").spawn;   
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  

    // E.g : http://localhost:3000/name?firstname=Levente
    var process = spawn('python',['/home/mario/criaserver/apiTest.py']); 
                        

    // Takes stdout data from script which executed 
    // with arguments and send this data to res object
    var output = '';
    process.stdout.on('data', function(data) {

        console.log("Sending Info")
        res.end(data.toString('utf8'));
    });

    console.log(output);
}); 
