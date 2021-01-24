var mainElement = document.querySelector(".main");

var woordInput = document.getElementById('woordInput');

var startButton = document.getElementById('startButton');
var submitButton = document.getElementById('submitButton');
var vraagteken = document.getElementById('vraagteken');
var score = document.getElementById('score');
var gaverder = document.getElementById('gaverder');


function createElement() {
	for (var i = 0; i < 25; i++) {
		var btn = document.createElement("button");
		btn.id = "letter" + i;
		btn.classList.add("lingoBoard");
		document.querySelector(".newElement").appendChild(btn);
	} 
} createElement();

var letter0 = document.getElementById("letter0");
var letter1 = document.getElementById("letter1");
var letter2 = document.getElementById("letter2");
var letter3 = document.getElementById("letter3");
var letter4 = document.getElementById("letter4");

var letter5 = document.getElementById("letter5");
var letter6 = document.getElementById("letter6");
var letter7 = document.getElementById("letter7");
var letter8 = document.getElementById("letter8");
var letter9 = document.getElementById("letter9");

var letter10 = document.getElementById("letter10");
var letter11 = document.getElementById("letter11");
var letter12 = document.getElementById("letter12");
var letter13 = document.getElementById("letter13");
var letter14 = document.getElementById("letter14");

var letter15 = document.getElementById("letter15");
var letter16 = document.getElementById("letter16");
var letter17 = document.getElementById("letter17");
var letter18 = document.getElementById("letter18");
var letter19 = document.getElementById("letter19");

var letter20 = document.getElementById("letter20");
var letter21 = document.getElementById("letter21");
var letter22 = document.getElementById("letter22");
var letter23 = document.getElementById("letter23");
var letter24 = document.getElementById("letter24");

var uitleg = document.querySelector(".uitleg");
var gameWonLayout = document.querySelector(".gameWonLayout");
var overlay = document.querySelector(".overlay");
var winOverlay = document.querySelector(".winOverlay");

var afsluiten = document.getElementById("afsluiten");
var gameAfsluiten = document.getElementById("gameAfsluiten");
var scoreNumber = document.getElementById("scoreNumber"); 

vraagteken.addEventListener("click" , function() {
		uitleg.style.display = "block";
		overlay.style.display = "block";
});

afsluiten.addEventListener("click" , function() {
		uitleg.style.display = "none";
		overlay.style.display = "none";
});

gameAfsluiten.addEventListener("click" , function() {
		gameWonLayout.style.display = "none";
		winOverlay.style.display = "none";
});

function eenGetal() {

	var ramdomGetal = Math.floor(Math.random() * Math.floor(480));
	var ramdomWoord = words[ramdomGetal];

	var randomChars = ramdomWoord;
	var chars = randomChars.split([""]);

	console.log(chars);

	submitButton.onclick = countClicks;
	var clickCounts =0;

	function countClicks() {

	clickCounts += 1;

	var woord = woordInput.value; 
	var inputChars = woord.split([""]);

	console.log(inputChars);
	
	var highScore = 0;
	highScore ++;

	function eersteRonde() {
		for (var i = 0; i < 5; i++) {
	    letter0.innerHTML = inputChars[0];
		letter1.innerHTML =  inputChars[1];
		letter2.innerHTML = inputChars[2];
		letter3.innerHTML = inputChars[3];
		letter4.innerHTML = inputChars[4];
	}

	if (inputChars.includes(chars[1]) || inputChars.includes(chars[2]) ||
			inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter0.style.backgroundColor = "yellow";	
		} 

		if ( inputChars.includes(chars[0]) || inputChars.includes(chars[2]) ||
			   inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter1.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter2.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[4])) {
			letter3.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[3])) {
			letter4.style.backgroundColor = "yellow";	
		}

		if (inputChars[0] == chars[0]) {
			letter0.style.backgroundColor = "red";
		}  if (inputChars[1] == chars[1]) {
			letter1.style.backgroundColor = "red";
		}  if (inputChars[2] == chars[2]) {
			letter2.style.backgroundColor = "red";
		}  if (inputChars[3] == chars[3]) {
			letter3.style.backgroundColor = "red";
		}  if (inputChars[4] == chars[4] ) {
			letter4.style.backgroundColor = "red";
		}
		for (var i = 0; i < 5; i++) {
			if (inputChars[i] == chars[i]) {
			scoreNumber.innerHTML = highScore;
			function tonen() {
			gameWonLayout.style.display = "block";
			winOverlay.style.display = "block";
		} tonen();
	}}; 
	}; 

	function tweedeRonde() {
    	for (var i = 0; i < 5; i++) {
    	letter5.innerHTML = inputChars[0];
	    letter6.innerHTML =  inputChars[1];
	    letter7.innerHTML = inputChars[2];
	    letter8.innerHTML = inputChars[3];
	    letter9.innerHTML = inputChars[4];

	    if (inputChars.includes(chars[1]) || inputChars.includes(chars[2]) ||
			inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter5.style.backgroundColor = "yellow";	
		} 

		if ( inputChars.includes(chars[0]) || inputChars.includes(chars[2]) ||
			   inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter6.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter7.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[4])) {
			letter8.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[3])) {
			letter9.style.backgroundColor = "yellow";	
		}

	   if (inputChars[0] == chars[0]) {
			letter5.style.backgroundColor = "red";
		}  if (inputChars[1] == chars[1]) {
			letter6.style.backgroundColor = "red";
		}  if (inputChars[2] == chars[2]) {
			letter7.style.backgroundColor = "red";
		}  if (inputChars[3] == chars[3]) {
			letter8.style.backgroundColor = "red";
		}  if (inputChars[4] == chars[4] ) {
			letter9.style.backgroundColor = "red";
		}
		for (var i = 0; i < 5; i++) {
			if (inputChars[i] == chars[i]) {
			scoreNumber.innerHTML = highScore;
			function tonen() {
			gameWonLayout.style.display = "block";
			winOverlay.style.display = "block";
		} tonen();
	}}; 
    }}; 

    function derdeRonde() {
    	for (var i = 0; i < 5; i++) {
    	letter10.innerHTML = inputChars[0];
	    letter11.innerHTML =  inputChars[1];
	    letter12.innerHTML = inputChars[2];
	    letter13.innerHTML = inputChars[3];
	    letter14.innerHTML = inputChars[4];

	    if (inputChars.includes(chars[1]) || inputChars.includes(chars[2]) ||
			inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter10.style.backgroundColor = "yellow";	
		} 

		if ( inputChars.includes(chars[0]) || inputChars.includes(chars[2]) ||
			   inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter11.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter12.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[4])) {
			letter13.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[3])) {
			letter14.style.backgroundColor = "yellow";	
		}

	   if (inputChars[0] == chars[0]) {
			letter10.style.backgroundColor = "red";
		}  if (inputChars[1] == chars[1]) {
			letter11.style.backgroundColor = "red";
		}  if (inputChars[2] == chars[2]) {
			letter12.style.backgroundColor = "red";
		}  if (inputChars[3] == chars[3]) {
			letter13.style.backgroundColor = "red";
		}  if (inputChars[4] == chars[4] ) {
			letter14.style.backgroundColor = "red";
		}
		for (var i = 0; i < 5; i++) {
			if (inputChars[i] == chars[i]) {
			scoreNumber.innerHTML = highScore;
			function tonen() {
			gameWonLayout.style.display = "block";
			winOverlay.style.display = "block";
		} tonen();
	}}; 
    }}; 

    function vierdeRonde() {
    	for (var i = 0; i < 5; i++) {
    	letter15.innerHTML = inputChars[0];
	    letter16.innerHTML =  inputChars[1];
	    letter17.innerHTML = inputChars[2];
	    letter18.innerHTML = inputChars[3];
	    letter19.innerHTML = inputChars[4];

	    if (inputChars.includes(chars[1]) || inputChars.includes(chars[2]) ||
			inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter15.style.backgroundColor = "yellow";	
		} 

		if ( inputChars.includes(chars[0]) || inputChars.includes(chars[2]) ||
			   inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter16.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter17.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[4])) {
			letter18.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[3])) {
			letter19.style.backgroundColor = "yellow";	
		}

	    if (inputChars[0] == chars[0]) {
			letter15.style.backgroundColor = "red";
		}  if (inputChars[1] == chars[1]) {
			letter16.style.backgroundColor = "red";
		}  if (inputChars[2] == chars[2]) {
			letter17.style.backgroundColor = "red";
		}  if (inputChars[3] == chars[3]) {
			letter18.style.backgroundColor = "red";
		}  if (inputChars[4] == chars[4] ) {
			letter19.style.backgroundColor = "red";
		}
		for (var i = 0; i < 5; i++) {
			if (inputChars[i] == chars[i]) {
			scoreNumber.innerHTML = highScore;
			function tonen() {
			gameWonLayout.style.display = "block";
			winOverlay.style.display = "block";
		} tonen();
	}}; 
    }}; 

    function vijfdeRonde() {
    	for (var i = 0; i < 5; i++) {
    	letter20.innerHTML = inputChars[0];
	    letter21.innerHTML =  inputChars[1];
	    letter22.innerHTML = inputChars[2];
	    letter23.innerHTML = inputChars[3];
	    letter24.innerHTML = inputChars[4];

	    if (inputChars.includes(chars[1]) || inputChars.includes(chars[2]) ||
			inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter20.style.backgroundColor = "yellow";	
		} 

		if ( inputChars.includes(chars[0]) || inputChars.includes(chars[2]) ||
			   inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter21.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[3]) || inputChars.includes(chars[4])) {
			letter22.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[4])) {
			letter23.style.backgroundColor = "yellow";	
		} 

		if (inputChars.includes(chars[0]) || inputChars.includes(chars[1]) ||
			  inputChars.includes(chars[2]) || inputChars.includes(chars[3])) {
			letter24.style.backgroundColor = "yellow";	
		}

	    if (inputChars[0] == chars[0]) {
			letter20.style.backgroundColor = "red";
		}  if (inputChars[1] == chars[1]) {
			letter21.style.backgroundColor = "red";
		}  if (inputChars[2] == chars[2]) {
			letter22.style.backgroundColor = "red";
		}  if (inputChars[3] == chars[3]) {
			letter23.style.backgroundColor = "red";
		}  if (inputChars[4] == chars[4] ) {
			letter24.style.backgroundColor = "red";
		} 
		for (var i = 0; i < 5; i++) {
			if (inputChars[i] == chars[i]) {
			scoreNumber.innerHTML = highScore;
			function tonen() {
			gameWonLayout.style.display = "block";
			winOverlay.style.display = "block";
		} tonen();
	}};
	}};
	 
	if (clickCounts <= 2) {
		eersteRonde();
	} if (clickCounts > 2 && clickCounts <= 4) {
		tweedeRonde();
	} if (clickCounts > 4 && clickCounts <= 6) {
		derdeRonde();
	} if (clickCounts > 6 && clickCounts <= 8) {
		vierdeRonde();
	} if (clickCounts > 8 && clickCounts <= 10) {
		vijfdeRonde();
	}
}};  
eenGetal();