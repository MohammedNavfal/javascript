// type conversion
//way-1 number to string
let a;
a = 25;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = 25.5;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = new Date();
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

//way-2
a = 25.5;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);

