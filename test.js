let n = 54321;
let x = 0;

while (n > 0) {
    x += (n % 10);
    n = Math.floor(n/10);
}
console.log(`Tong cac chu so trong n:  ${x}`);