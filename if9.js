let temp = 28;

if (temp <= 0) {
    console.log('Freezing');
} else if (temp > 0 && temp <= 10) {
console.log('Very Cold');
} else if (temp > 10 && temp <= 20){
    console.log('Cold');
} else if (temp > 20 && temp <= 30) {
    console.log('Normal');
} else if (temp > 30 && temp <= 40) {
    console.log('Hot');
} else if (temp > 40) {
    console.log('Very Hot');
}