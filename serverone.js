 var http = require('http'); // require http module
 var inquirer = require("inquirer");

 var PORT1 = 7000;
 var PORT2 = 7500;

 var complimentArr = ["I like your shoes", "I dont care what anyone says. You're alright by me", "Remember, they talked bad about Jesus too"];
var insultArr = ['U R DUM', 'I H8 U', 'U SMEL LIEK FISH', 'U R SO DUM U THOT A BUS WUZ A TWEENKIE LOLZ'];
var insult = insultArr[Math.floor(Math.random() * insultArr.length)]
var compliment = complimentArr[Math.floor(Math.random() * complimentArr.length)];

 
 inquirer
 .prompt([
     {
         name: 'start',
         type: 'list',
         message: 'CHOOSE YOUR PORT',
         choices: ['ONE', 'TWO']
     }
 ]).then(function(answer) {
     if (answer.start.toUpperCase() === "ONE"){
     port1();
    } else if (answer.start.toUpperCase() === 'TWO') {
        port2();
    }
 }) 
 

function port1() {
 function port1(request, response) {
     response.end("It works. Path Hit: " + request.url);
 }

 var server = http.createServer(port1);

 server.listen(PORT1, function() {
     console.log(compliment);
 });}


 function port2() {
 function port2(request, response) {
    response.end("It works. Path Hit: " + request.url);
}

var server = http.createServer(port2);

server.listen(PORT2, function() {
    console.log(insult);
});}