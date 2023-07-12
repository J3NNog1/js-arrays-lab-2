/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result:\n', foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

foods.push('pizza', 'cheeseburger')

console.log('Exercise 2 Result:\n',  foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array. 
*/

// Complete Exercise 3 below...

foods.unshift('taco')

console.log('Exercise 3 Result:\n', foods);

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign it to a variable named favFood.
*/

// Complete Exercise 4 below...


let favFood = foods[1]

console.log('Exercise 4 Result:\n', favFood);

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...



console.log('Exercise 5 Result:\n', foods);

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...



console.log('Exercise 6 Result:\n', foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...



console.log('Exercise 7 Result:\n', yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...



console.log('Exercise 8 Result:\n', soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...



console.log('Exercise 9 Result:\n', allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...



console.log('Exercise 10 Result:\n', hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...



console.log('Exercise 11 Result:\n', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

// Complete Exercise 12 below...





console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/


// Complete Exercise 13 below...



console.log('Exercise 13 Result:\n', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign it to a variable named num.
*/

// Complete Exercise 14 below...



console.log('Exercise 14 Result:\n', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays, and assign the sum to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...

// const numArrays = [
// 	[100, 5, 23],
// 	[15, 21, 72, 9],
// 	[45, 66],
// 	[7, 81, 90]
// ];


console.log('Exercise 15 Result:\n', total);










// example 2 answer:

// foods.push('pizza', 'cheeseburger')


// example 3 answer:

// foods.unshift('taco')

// example 4 answer:

// const favFood = foods[1]

// example 5 answer:


// foods.splice(2, 0, 'tofu')

// example 6 answer:

// let yummy = foods.slice(1, 3)

// example 7 answer:

// const soyInd = foods.indexOf('tofu')

// example 8 answer:

// const allFoods = foods.slice('->')

// example 9 answer:

// const hasSoup = foods.includes('soup')

// example 10 answer:

// let odds = []

// example 11 answer:

// nums.forEach(function (num){
//   if (num % 2 ===1) {
//     odds.push(num)
//   }
  
// }
// )

// example 12 answer:


// nums.forEach(function (num) {
//   if (num % 3 === 0) {
//     fizz.push(num)
//   }
//   if (num % 5 === 0) {
//     buzz.push(num)
//   }
//   if (num % 3 === 0 && num % 5 === 0) {
//     fizzbuzz.push(num)
//   }
// })


// example 13 answer:

// const numList = numArrays[numArrays.length - 1]

// example 14 answer:

// let num = numArrays[2][1]


// example 15 answer:


// let total = 0
// numArrays.forEach(function(array){
//   console.log('nested array', array)
//   array,forEach(function(num){
//     console.log('num', num)
//     total += num
//   }) 
// })