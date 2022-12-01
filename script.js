var r = Math.floor(Math.random() * 1001);

const answers = new Map([]);
console.log(r);

function myFunction1() {
	let s = document.getElementById("answ1").value;
	document.getElementById("zmizet").style.display = "none";
	if(s == r){
		document.getElementById("body").style.background = "green";
		document.getElementById("vysledek").innerHTML = 'Vyhrál jsi, uhodl jsi číslo';
	} else {
		document.getElementById("body").style.background = "red";
		document.getElementById("vysledek").innerHTML = 'Prohrál jsi neuhodl jsi číslo';
	}
}

function myFunction2(){
	console.log("Tlačítko je funkční");
	let a = document.getElementById("answ2").value;
	var answ = (r % a);
	answers.set(a.toString(),answ.toString());
	console.log(answ);
	console.log(answers.values());
	console.log(answers.keys());
}