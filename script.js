var r = Math.floor(Math.random() * 1001);

var answers = new Map([]);
console.log("Číslo které si myslím: "+r);

function myFunction1() {
	let s = document.getElementById("answ1").value;
	document.getElementById("zmizet").style.display = "none";
	document.getElementById("container-reset").style.display = "block";
	if(s == r){
		document.getElementById("body").style.background = "#49fb35";
		document.getElementById("vysledek").innerHTML = 'Vyhrál jsi, uhodl jsi číslo';
	} else {
		document.getElementById("body").style.background = "#FD1C03";
		document.getElementById("body").style.color = "white";
		document.getElementById("vysledek").innerHTML = "Prohrál jsi, číslo které jsem si myslel bylo " + r;
	}
}

function myFunction2(){
	let a = document.getElementById("answ2").value;
	var answ = (r % a);
	answers.set(a.toString(),answ.toString());
	var output = "<strong>Moje pokusy:</strong> ";
	for (const [key, value] of answers) {
		output = output+"R mod <strong>"+`${key} = ${value}`+"</strong>; ";
	}
	document.getElementById("vysledky").innerHTML = output;
}

function reset(){
	document.getElementById("body").style.background = "white";
	document.getElementById("body").style.color = "black";
	document.getElementById("zmizet").style.display = "block";
	document.getElementById("container-reset").style.display = "none";
	r = Math.floor(Math.random() * 1001);
	answers = new Map([]);
	console.log(r);
	document.getElementById("vysledek").innerHTML = "";
	document.getElementById("vysledky").innerHTML = "";
}