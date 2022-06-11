// Besh xonali n butun soni berilgan shu son raqamlarining eng kattasini
// qaytaradigan dastur tuzing.
// Input: n.(Butun son).


let n = 56987;

let a = n % 10;
let b = (n - a) / 10 % 10;
let c = (n - (n % 100)) / 100 % 10;
let d = ((n - (n % 1000)) / 1000) % 10;
let e = ((n - (n % 10000)) / 10000) % 10;

if (a >= b && a >= c && a >= d && a >= e) {
    console.log(a);
} else if (b >= a && b >= c && b >= d && b >= e) {
    console.log(b);
} else if (c >= a && c >= b && c >= d && c >= e) {
    console.log(c);
} else if (d >= a && d >= b && d >= c && b >= e) {
    console.log(d);
} else {
    console.log(e);
}