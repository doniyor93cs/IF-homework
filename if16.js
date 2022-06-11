let n = 8481;

if (n < 10) {
    console.log(n);
} else if (n >= 10 && n < 100) {
    let a = n % 10;
    let b = (n - a) / 10;
    console.log(a + b);
} else if (n >= 100 && n < 1000) {
    let a = n % 10;
    let b = ((n - a) % 100) / 10;
    let c = (n - a - (b * 10)) / 100;
    console.log(a + b + c);
} else if (n >= 1000 && n < 10000) {
    let a = n % 10;
    let b = (n % 100 - a) / 10;
    let c = (n % 1000 - a - (b * 10)) / 100;
    let d = (n - (c * 100) - (b * 10) - a) / 1000;
    console.log(a + b + c + d);
}