console.log("hey")

var enter = prompt("Enter any word of your choice! No swear words please!");

alert(
	"Your choice of word was " + enter + "\n" +
	"There are " + enter.length + " characters in the word" + "\n" +
	"The third character is " + enter.charAt(2) + "\n" + "Lowercase: " + enter.toLowerCase() + "\n" + 
	"Uppercase: " + enter.toUpperCase() + "\n" + "Example: I like to eat " + enter + "\n"
	+ "Subword: " + enter.substring(1,4)
)
	 