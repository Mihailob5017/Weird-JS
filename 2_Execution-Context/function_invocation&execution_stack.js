//  Invokation -> calling a function

function b() {
	var c = 15;
	console.log('Function B! ' + c);
}

function a() {
	// var d is stored localy in the functions execution context
	b();
	var d = 12;
	// In case we comment out the var d = 12
	// It will go up to the global execution context and search for it
	// there, however, it doesnt go the other way around
	console.log('Function A! ' + d);
}
// Var d is stored in the global execution context
var d = 21;
console.log(d);
a();
console.log(d);
