let a = +prompt();

if (a % 2 !== 0 && a >= 10 && a <= 99) {
    console.log('Ikki xonali toq son');
} else if (a % 2 === 0 && a >= 10 && a <= 99) {
    console.log('Ikki xonali juft son');
} else if (a % 2 !== 0 && a >= 100 && a <= 999) {
    console.log('uch xonali toq son');
} else if (a % 2 === 0 && a >= 100 && a <= 999) {
    console.log('uch xonali juft son');
}