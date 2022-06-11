let n = 43;

let x = n % 10;
let y = (n - x) / 10;
let sum = x * 10 + y;

if (sum <= n) {
    console.log(true);
} else {
    console.log(false);
}