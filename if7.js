let x = 1.5;
let fx = 0;

if (x <= 0) {
    fx = -x;
} else if (0 < x && x < 2) {
    fx = x**2;
} else if (x >= 2){
    fx = 4;
}

console.log(fx);