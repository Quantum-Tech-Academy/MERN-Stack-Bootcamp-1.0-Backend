var firstName = "Haroon";
var lastName = "Khan";
let age = 19;
const gender = "Male";

lastName = 45;

const products = ["Iphone 12", "Amazefit watch 3", "Macbook M1", "Google Pixel 4", "Black berry"]

const [mobile, watch] = products
console.log("mobile", mobile, watch)

const product = {
    name: "Dairy Milk Chocolate",
    company: "Cadbury",
    price: 450,
}

const { company, price } = product; // Destructuring
console.log(company, price)

function checkEvenOdd(n) {
    if(n % 2 === 0) {
        return true
    } else {
        return false
    }
}

const result = checkEvenOdd(10)
console.log(result)


let a = 5;
let b = a;
a = 7;
console.log("b", b);

let animal = {
    name: "Melo",
    age: 12
};

let newAnimal = {...animal};
animal.name = "New melo";
console.log(newAnimal)

const students = ["Hamad", "Aman", "Mosaddiq", "Roman"];
const shortlisted = [...students]
shortlisted.splice(2, 1);
console.log(students)
console.log("short listed", shortlisted)

function sum(...args) {
    console.log(args)
    const result = args.reduce((currentValue, sum) => currentValue + sum, 0)
    return result;
}

console.log(sum(1, 2, 78, 43, 323,1))
