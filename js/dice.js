
// JavaScript Document
 
function getDice1() {
    var dice1 = Math.floor(Math.random() * 100);          
    document.getElementById('condice1').innerHTML = (dice1 + 1);
}