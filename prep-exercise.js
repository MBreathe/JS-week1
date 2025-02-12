
// JS week one prep exercise

// prep exercise one

let myString = 'hello,this,is,a,difficult,to,read,sentence';

myString = myString.split(',').join(' ');

/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(myString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');

// prep exercise two

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(`The number ${i} is even!`);
    }
    else {
        console.log(`The number ${i} is odd!`);
    }
}

// prep exercise three

let recipe = {};
recipe = {title: 'cookies', servings: 1, ingredients: ['3 eggs', 'flour', 'milk', 'baking powder', 'butter']};

for (let [key, value] of Object.entries(recipe)) {
    if (key === 'title') {
        console.log(`Meal name: ${value}`);
    }
    else if (key === 'servings') {
        console.log(`Servings: ${value}`);
    }
    else {
        console.log(`Ingredients: ${value}`);
    }
}

// prep exercise four

let books = [];
books = [{title: 'Title one', author: 'JJ.Someone', alreadyRead: true}, {title: 'Title two', author: 'RD.SomeoneElse', alreadyRead: false}, {title: 'Title three', author: 'LP.SomeoneElseEntirely', alreadyRead: false}];

for (let i = 0; i < books.length; i++) {
    console.log(`${books[i].title} by ${books[i].author}`);
    if (books[i].alreadyRead === true) {
        console.log(`You already read ${books[i].title}`);
    }
    else {
        console.log(`You really need to read ${books[i].title}`);
    }
}

//prep exercise five

/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 *
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:
const drinkTypes = ['cola', 'lemonade', 'water'];
let drinkTray = [];

for (let i = 0; i < drinkTypes.length; i++) {
    for (let j = 0; j < 2; j++) {
        if (drinkTray.length < 5) {
            drinkTray.push(drinkTypes[i]);
        }
    }
}
console.log(drinkTray);