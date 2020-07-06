var name = prompt("Come ti chiami?");

var surname = prompt("Qual è il tuo cognome?");

var favouriteColour = prompt("Qual è il tuo colore preferito?");

var sum = name + surname + favouriteColour + 19;

document.getElementById('pswresult').innerHTML = 'la tua password insicura è:'+" "+ sum;

console.log (name);
console.log (surname);
console.log (favouriteColour);
