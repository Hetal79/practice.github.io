document.write('hello </br>')
// greetings = 'hey';
// document.write('<br/><h1>{greetings}</h1>');
const date = new Date();
 const hours = date.getHours();
 var greetings
 if (hours>18)
 {
     greetings = 'Good Morninng.';
 }
 else if (hours>12){
     greetings = 'Good Afternoon';
 }
 else if(hours >0){
     greetings = 'good Evening';
 }
 else{
     greetings='Good night';
 }
document.write(greetings);
var greet = 'Welcome'
var name = ' Hetal'
var welMsg = greet + name;
// document.getElementById('msg').innerHTML('<h1> {welMsg}</h1>');
document.write('<br/> <span>',welMsg ,'</span>');