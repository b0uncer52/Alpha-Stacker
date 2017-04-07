var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function stackLetters(theAlphabetArray) {
	var output = "";
	for (var i = 0; i < alpha.length; i++) {
		output += alpha[i];
		if(i % 3 === 2) {
			output += " ";
		}
		console.log(output );
	}
}
stackLetters(alpha);