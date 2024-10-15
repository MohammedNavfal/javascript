//ternary operator

const age = 22;
const result = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result);

//Handling null values

function welcome(name) {
    const result = name ? name : "No Name";
    console.log("welcome " + result);
}
welcome();
welcome(null);
welcome('navfal');

//for object type
user = { 'name': 'navfa', 'age': 25 };
console.log(user);
console.log(user.name);

//arrow function blabla

const greeting = (user) => {
    const name = user.name ? user.name : "No name";
    return "hello " + name;
}
console.log(greeting(user));

//conditional chains

/*
avg >=90 A grade
avg >=80 B grade
C grade
*/

const avg = 76;
const grade = avg >= 90 ? "A grade" : avg >= 80 ? "B grade" : " C grade";
console.log("Grade ", grade);
