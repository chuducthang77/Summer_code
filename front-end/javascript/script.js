console.log("logging successfully")

var website = "https://github.com";
var person = "Thang";

console.log(person)

/*Variables: let - local variable, var - global variable*/
let apples = 1;
const height = "6'0\"";

if (person == "Thang") {
    let apples = 5;
}

console.log("I am ", apples);

/*Comment single line: Command / */

/*Data structure javascript*/
const thing = null;
const notdefined = undefined;
const getAge = function() {return 31;}; //function
const obj = {'name':'Thang', 'profession': 'student'}; //objects

//Document Object Model: Node is HTML element

//Select elements by their IDs
// const box = document.getElementById("box");
// box.innerHTML = "<u>Something</u> New";
// box.innerText = "hello";

let people = {};
people = {'Name': 'Thang', 'Age': 21, 'Hobby': ['Movies', 'Books']}
console.log(people)

//String methods
const paragraph = "Hello my name is Chu Duc Thang";
console.log(paragraph.search('my'))
console.log(paragraph.replace("my", "My"))

//.search(), .slice(), trim(), .split(), .toUppercase(), .length, .replace

console.log(typeof(paragraph))

//Casting
let year = '2000';
year = Number(year);
year = Object(year);
year = Array(year);
year = Boolean(year);
let input;
input = prompt("What is your age");

//Template literal
let birthday = '2000';
let script = 'I was born in ${birthday}';

//Array
let array = ["One", 2, 3];
array.push("hello");
console.log(array);
array.pop();
console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log(i);
}

//Loop
array.forEach(num => {
    console.log(num)
});

//Select multiple DOM nodes
let elem = document.querySelectorAll('.class-node');
console.log(typeof(elem))

elem = document.querySelectorAll('ol')
elem.forEach(text => {
    text.innerHTML = "This is changed";
})

elem.forEach(node => {
    node.classList.add("custom-class", "second-class");
});

//Rest operator 
function addNumbers(greetingName, ...numbers) {
    let total = 0;
    for (index in numbers) {
        total = total + numbers[index];
    }
    return `${greetingName}: the total is ${total}`;
}
const phrase = addNumbers('thang', 1,2,3,4);
console.log(phrase)

//Objects with functions
const dog = {
    'name' : 'sumo',
    'age' : 4,
    'speak': function(want) {
        console.log(`Woof, I want a ${want}`);
    },
    talk(to) {
        console.log(`I am talking to ${to}`);
    }
}