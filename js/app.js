
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
function userNum () {
	do{
	var choice = parseInt(window.prompt("Please enter a number from 1-100", ""), 10);
	}
	while(isNaN(choice) || choice > 100 || choice < 1){
		alert("Great job!")
}
// the for loop is called. 
	if ( choice == true  ) {
}
}
function fizzBuzz (n) {
	for ( var n = 1; n <= 100; n++) {
		if( n % 3 == 0){
		console.log("Fizz");
	}
		else if ( n % 5 == 0){
		console.log("Buzz");
	}
		else if ( n % 3 == 0 && n % 5 == 0) {
		console.log("Fizz Buzz!");
	}
		else {
		console.log(n);
	}
  }
}
fizzBuzz();
userNum();



