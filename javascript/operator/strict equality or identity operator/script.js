//strict equality or identity operator

let a = 10;
console.log(a);
let b = '10';
console.log(a == b);
console.log(a === b);

//undefined
let z;
let y;
console.log(z == y);
console.log(z === y);

//null,null
//true
//true

//true
z = true;
y = true;
console.log(z == y);
console.log(z === y);

//false
z = false;
y = false;
console.log(z == y);
console.log(z === y);

//'navfal'
z = 'navfal';
y = 'navfal';
console.log(z == y);
console.log(z === y);

//0
z = 0;
y = 0;
console.log(z == y);
console.log(z === y);

//+0-0
z = +0;
y = -0;
console.log(z == y);
console.log(z === y);

//+0,0
z = +0;
y = 0;
console.log(z == y);
console.log(z === y);

//-0,0
z = -0;
y = 0;
console.log(z == y);
console.log(z === y);

//0,false
z = 0;
y = false;
console.log(z == y);
console.log(z === y);

//"",false
z = "";
y = false;
console.log(z == y);
console.log(z === y);

//"",0
z = "";
y = 0;
console.log(z == y);
console.log(z === y);

//'0',0
z = '0';
y = 0;
console.log(z == y);
console.log(z === y);

//'15',15
z = '15';
y = 15;
console.log(z == y);
console.log(z === y);

//new string,'navfal'
z = new String('navfal');
y = 'navfal';
console.log(z == y);
console.log(z === y);

//null,undefined
//true
//false