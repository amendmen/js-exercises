/*
  Write a JavaScript function that reverse a number
  Example x = 32243
  Expected Output : 34223
*/
function reverseNumber(num) {
  // Your code goes here ...
  const str = String(num)
  return str.split('')
            .reverse()
            .join('')
}

console.log(reverseNumber(32243)); // => 34223

/*
  Write a JavaScript function that returns a passed string with letters in alphabetical order
  Example string : 'webmaster'
  Expected Output : 'abeemrstw'
*/
function alphabetOrder(str) {
  // Your code goes here ...
  const arr = str.split('')
  arr.sort((a , b) => {
    if (a < b) { return -1 }
    if (a > b) { return 1 }    
    return 0
  })
  return arr.join('')
}

console.log(alphabetOrder('webmaster')); // => "abeemrstw"

/*
  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
  Example string : 'Web Development Tutorial'
  Expected Output : 'Development'
*/
function findLongestWord(sentence) {
  // Your code goes here ...
  const arr = sentence.split(' ');
  return arr.reduce((acc, cur) => {
    if (cur.length > acc.length) {
      acc = cur
    }

    return acc
  }, '')
}

console.log(findLongestWord('Web Development Tutorial')); // => "Development"

/*
  Write a JavaScript function to extract unique characters from a string
  Example string : "thequickbrownfoxjumpsoverthelazydog"
  Expected Output : "thequickbrownfxjmpsvlazydg"
*/
function uniqueChars(str) {
  // Your code goes here ...
  const set = new Set();
  str.split('').forEach((char) => {set.add(char) })
  const res = []
  set.forEach((e) => res.push(e))
  return res.join('')
}

console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog')); // => "thequickbrownfxjmpsvlazydg"

/*
  Write a JavaScript function to pass a 'JavaScript function' as parameter
  Example input : function
  Example output : "Student has been added"
*/
function addStudent(fn) {
  // Your code goes here ...
 return fn()
}

function onAddStudent() {
 return "Student has been added"
}
console.log(addStudent(onAddStudent)) // => "Student has been added"

/*
  Write a JavaScript function to get the value of "this" (keyword)
  Sample data :
  const user = {
    name: 'John',
    age: 27
  };
  Expected Output :
  {name: "john", age: 20}
*/
function getContext() {
  // Your code goes here ...
  user = {
    name: 'John',
    age: 27
  };

  return this.user
}

console.log(getContext())