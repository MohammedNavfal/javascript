//string to num

a = "125";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a)

a = false;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a)

a = [1, 2, 3, 4, 5];//nan
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a)

a = "navfal";//nan
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a)

a = "35.55";
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a)