let a = parseInt(prompt('Enter A'));
let b = parseInt(prompt('Enter B'));
let c = parseInt(prompt('Enter C'));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('input values should be ONLY numbers ');
} else if (a < 0 || b < 0 || c < 0) {
    console.log('Triangle doesn’t exist');
} else if (a === 0 || b === 0 || c ===0){
    console.log('A triangle must have 3 sides with a positive definite length ');
} else if (a === b && b === c && c === a){
    console.log('Equilateral triangle')
} else if (a === b || b === c || c === a){
    console.log('Isosceles triangle');
} else if (a !== b && b !== c && c !== a){
    console.log('Scalene triangle');
} 