
// for (var i = 1 ; i <= 100 ; i++) {

// 	if ( i % 3 == 0)  {
// 	console.log("Fizz"); 
// }
// 	else if  ( i % 5 == 0) {
// 		console.log("Buzz");
// }
// 	else if ( i % 3 == 0 && i % 5 == 0){
// 		console.log("Fizz Buzz!");
// }	
// 	else  {
// 		console.log(i);

// }
// }

//User is prompted number cannot be over 100!


// user is prompted to input a number between 1 & 100
// if number is bigger than 100, user is alerted.

$(document).ready(function() {

var choice;

function userNum () {
	choice = $('#guess').val()

if(choice > 100 || choice < 1 || choice == '' || isNaN(choice)){
		alert("Try again...")
		return false;
}
	else {
		alert("Great job!")

	for ( choice; choice <= 100; choice++) {
		if ( choice % 3 == 0 && choice % 5 == 0) {
		console.log("Fizz Buzz!");
		$('#glist').append("<li> Fizz Buzz! </li>")
	}
		else if ( choice % 5 == 0){
		console.log("Buzz");
		$('#glist').append("<li> Buzz </li>")
	}
		else if( choice % 3 == 0){
		console.log("Fizz");
		$('#glist').append("<li> Fizz </li>")
	}
		else {
		console.log(choice);
		$('#glist').append("<li>" + choice + "</li>")
}
 }
}

}
$('#guess-btn').on('click', userNum);

});

	





// function fizzBuzz () {
	// for ( var n = 1; n <= 100; n++) {
	// 	if( n % 3 == 0){
	// 	console.log("Fizz");
	// }
	// 	else if ( n % 5 == 0){
	// 	console.log("Buzz");
	// }
	// 	else if ( n % 3 == 0 && n % 5 == 0) {
	// 	console.log("Fizz Buzz!");
	// }
	// 	else {
	// 	console.log(n);
	// }
//   }
// }
// fizzBuzz();
// userNum();




