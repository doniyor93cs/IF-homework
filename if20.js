// Besh xonali n butun soni berilgan shu son raqamlaring eng kattasini va
// turgan indexini(o `rnini) qaytaradigan dastur tuzing.

let n = 56987;

let a = n % 10;
let b = (n - a) / 10 % 10;
let c = (n - (n % 100)) / 100 % 10;
let d = ((n - (n % 1000)) / 1000) % 10;
let e = ((n - (n % 10000)) / 10000) % 10;

if (a >= b && a >= c && a >= d && a >= e) {
    console.log(a, 5);
} else if (b >= a && b >= c && b >= d && b >= e) {
    console.log(b, 4);
} else if (c >= a && c >= b && c >= d && c >= e) {
    console.log(c, 3);
} else if (d >= a && d >= b && d >= c && b >= e) {
    console.log(d, 2);
} else {
    console.log(e, 1);
}