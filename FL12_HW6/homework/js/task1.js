const NUM1 = 4;
const NUM2 = 2;

let a = parseFloat(prompt('Enter A'));
if (isNaN(a)) {
    console.log('Invalid input data');
} else if (a === 0) {
    console.log('Invalid input data');
}

let b = parseFloat(prompt('Enter B'));
if (isNaN(b)) {
    console.log('Invalid input data');
}

let c = parseFloat(prompt('Enter C'));
if (isNaN(c)) {
    console.log('Invalid input data');
}


let dscr = b * b - NUM1 * a * c;
if (dscr < 0) {
    console.log('no solution');
} else if (isNaN(dscr)) {
    console.log('no solution');
} else if (dscr === 0) {
    let sqrtDscr = Math.sqrt(dscr);
    let x = (-b + sqrtDscr) / (NUM2 * a);
    console.log('x = ' + Math.round(x))
} else {
    let sqrtDscr = Math.sqrt(dscr);
    let x1 = (-b + sqrtDscr) / (NUM2 * a);
    console.log('x1 = ' + Math.round(x1));
    let x2 = (-b - sqrtDscr) / (NUM2 * a);
    console.log('x2 = ' + Math.round(x2));
}