let a = +prompt();

if (a % 2 !== 0 && a > 0) {
    console.log('musbat toq son');
} else if (a % 2 === 0 && a > 0) {
    console.log('musbat juft son');
} else if (a % 2 !== 0 && a < 0) {
    console.log('manfiy toq son');
} else if (a % 2 === 0 && a < 0) {
    console.log('manfiy juft son');
} else {
     console.log('son 0 ga teng');
}