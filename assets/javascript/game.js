/*letters = [a, b, c]
guess = 8
wins = 0
loses = 0
userGuess = []

//Start
	//Random letter chosen
		//inpt letter
			//check if (random = input) {
				//win
				//else (
					//input - user Guess)
					//Guess - 1
				//compare			}
*/
var numberOfGuesses = 13;
var	letters = ["a", "b", "c", "d", "e", "f",
				 "g", "h", "i", "j", "k", "l", 
				 "m", "n", "o", "p", "q", "r", 
				 "s", "t", "u", "v", "w", "x", 
				 "y", "z"];
var wins = 0;
var extol = ['e','x','t','o','l']
	nadir = ['n','a','d','i','r']
	circumspect = ['c','i','r','c','u','m','s','p','e','c','t']
	inveterate = ['i','n','v','e','t','e','r','a','t','e']
	panacea = ['p','a','n','a','c','e','a']
	cajole = ['c','a','j','o','l','e']
	enmity = ['e','n','m','i','t','y']
	vociferous = ['v','o','c','i','f','e','r','o','u','s']
	alacrity = ['a','l','a','c','r','i','t','y']
	jubilant = ['j','u','b','i','l','a','n','t'];

var words = [extol, nadir, circumspect, inveterate, 
			panacea, cajole, enmity, vociferous, 
			alacrity, jubilant];
var wordsLength = words.length;
var guessesInputted = [];
var computerWord = words[Math.floor(Math.random() * words.length)];
	console.log(computerWord);
//When key is hit, key is captured
document.onkeyup = function (event) {
	document.getElementById("numberGuesses").innerHTML = numberOfGuesses;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("lettersGuessed").innerHTML = guessesInputted;
	
	var userGuess = event.key;
	console.log('event key', event.key);

	

	//document.getElementById("computerWord").innerHTML = computerWord;

	for (var i = 0; i < computerWord.length; i++) {
			if (userGuess === computerWord[i]) {
				console.log("You entered a first letter.");
	}
		else {
			numberOfGuesses = numberOfGuesses - 1;
			guessesInputted.push(userGuess + ', ');
			console.warn('Not the correct letter');
		}
	}
}
/*
function result (generateWord) {
	var wordHolder = document.getElementById('hold');
	for (var j = 0; j < computerWord.length; j++) {
		if (computerWord.indexOf(userGuess) >= 0) {
			console.log(computerWord[i]);
		else {
			console.log('_');
		}
	}

}

}
function processInput (computerCheck) {
	for (var i = 0; i < ; i++) {

		if (words[i].charAt(userGuess) < 0) {
			numberofGuesses--;
			guessesInputted.push(userGuess);

		}
		else 
			guesses

	}
}

/* // Grabbing a reference to the span below.
var userText = document.getElementByID("user-text");
	
	// Javascript executes when onkeyup event fires
	document.onkeyup = function (event) {
		userText.textContent = event.key;
	}; 

for (var i < 0)

}

function chooseWord (words.length) {

}
*/

