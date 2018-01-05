var gathered = document.getElementsByClassName('button');
console.log(gathered);
var quantity = gathered.length;
console.log(quantity);
for(var i=0; i<quantity; i++) {
	console.log(gathered[i].innerText);
	alert(gathered[i].innerText);
}


