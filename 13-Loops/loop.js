//for loops
let topics = ['HTML', 'CSS', 'JS', 'React', 'NodeJs'];
let word = 'I am learning ';
for (let i = 0; i < topics.length; i++) {
  word += topics[i] + ' ';
}
console.log(word + '.');


const myArray = [6, 19, 20, 63, 25, 36];
const yourArray = [19, 81, 2, 25, 63, 5];
const newArray = [];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      newArray.push(yourArray[j]);
    }
  }
}

console.log('Both loops have do number ' + newArray);

// while loops

let i = 24;
while (i < 50) {
  i++
  console.log(i);

}

// do- while loops   şart sağlanmasa bile bir kere çalışır
let j = 5;
do {
  console.log(j);
  j++;
} while (j < 5);


const userName = 'abc';
const userPass = '123';
let yourUser = '';
let yourPass = '';
let counter = 1;
do {
  yourUser = prompt('Enter your user name...');
  yourPass = prompt('Enter your password...');

  if (userName === yourUser && userPass === yourPass) {
    console.log('Successfully Login...');
    break
  } else if (counter === 3) {
    console.log('You made 3 incorrect entries.Process terminated...');
    break;
  } else {
    console.log('Wrong user name or password. Please try again.');
    counter++;
  }
} while (true);