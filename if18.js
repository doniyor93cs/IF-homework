// a, b, c butun sonlarning orasidan eng kattasini toping.
// Input: a, b, c.(Butun son.0 < n < 10000).
// Output: Maxsimum.

let a = +prompt();
let b = +prompt();
let c = +prompt();

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}