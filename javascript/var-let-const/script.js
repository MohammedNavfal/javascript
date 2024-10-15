/*var a = 25;
var b = 35;
console.log(a + b);*/

//1.scope
/*if (true) {
    // var msg = "welcome to var navfal";
    // let msg = "welcome to let navfal";
    const msg = "welcome to const navfal";
    console.log(msg);
}
//console.log(msg);
*/

//2.variable redeclaration
/*
var a = 25;
console.log(a);

var a = 45;
console.log(a);
*/

/*
let a = 25;
console.log(a);

let a = 45;
*/

/*
const a = 25;
console.log(a);

const a = 45;
*/

//3.value assignment
/*
var a = 25;
console.log(a);
a = 45;
console.log(a);
*/

/*
let a = 25;
console.log(a);
a = 45;
console.log(a);
*/

/*
const a = 25;
console.log(a);
a = 45; //constant error
console.log(a);
*/

//but can change const object pair value
const student = { "fname": "ram", "age": 12 };
console.table(student);
console.log(student.fname);
student.fname = "navfal";
console.table(student);






