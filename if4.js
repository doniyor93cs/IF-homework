let x = 3;
let y = 7;

if (x > 0 && y > 0) {
    console.log('1-quarter');
} else if (x < 0 && y > 0) {
    console.log('2-quarter');
} else if (x < 0 && y < 0) {
    console.log('3-quarter');
} else if (x > 0 && y < 0) {
    console.log('4-quarter');
} else{
    console.log('error');
}