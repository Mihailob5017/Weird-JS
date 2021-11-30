//  SYNTAX PARSER
//
//
//  A program that reads your code and determines what
// it does and if its grammar is valid
//
// "Compiliers" and "Trasnpilers" translate your code into 0's and 1 's

//  LEXICAL ENVIRONMENT
//
//  Where something sits physically in the code you write
//  For example
function hello() {
	var a = 'hello world';
}
// The variable a is sitting in a function hello()
//

// EXECUTION CONTEXT
//
// A wrapper to help manage the code that is running
//
// There are lots of lexical envirnoments.Which one is currently
// running is managed via execution contexts. It can contain
// things beyond what you've written in you code.
