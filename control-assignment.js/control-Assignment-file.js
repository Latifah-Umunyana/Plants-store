

//Q1. Write a program that takes in an array of numbers and consoles the first four items
//  multiplied by itself  and the last two added by 10. Return the array with the new values


let numbersArray = [2,4,9,1,0,4,40,24,31,10,72,5,3];

let newArray = []

function changeNumbers(nums){

for (let i = 0; i < nums.length; i++) {

    if(i<4){

        let result  = nums[i]*nums[i];
        newArray.push(result)

    }

   if (i>= nums.length-2) {
    
result = nums[i] + 10;
newArray.push(result)

   }

}

return newArray;

}

// console.log(changeNumbers(numbersArray));

// Another way for question1

let numbersArray2 = [2,4,9,1,0,4,40,24,31,10,72,5,3];

let newArray2 = []

function changeNumbers1(nums){

for (let i = 0; i < nums.length; i++) {

    if(i<4){

        nums[i] *= nums[i];

    }

   if (i>= nums.length-2) {
    
    nums[i] +=  10;

   }

}

return nums;

}

// console.log(changeNumbers1({numbersArray2}));
    
// Write a program that takes in the following array and use a while loop to iterate and break when the
//  item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

let arrNum = [1,2,3,4,5,6,7,8,9];

function stopAtFour(arrNumbers){

    let arraySize = arrNum.length

    let i = 0;

 while(i < arraySize){

if (arrNumbers[i] === 3) {

    break;

} 

else {
    
    console.log(arrNumbers[i]);

}

i++;

 }

}

stopAtFour(arrNum);

//Q3. Write a function that takes in a an array of strings and use a continue statement when 
// the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

let fruits= ['apple','plum','banana','strawberries','kiwi'];

function arrayOfString(strings){

for (let index = 0; index < strings.length; index++) {
    
if (index === 2) {

    continue;
    
} else {
    
console.log(strings[index]);

}

}

}

arrayOfString(fruits);

//Q4. Write a function that accepts an array of strings and console.logs each element using a for loop.

names = ["latifa","dorcas","esther"]

function stringArray(strArray){

for (let i = 0;i < strArray.length; i++) {

    console.log(strArray[i]);
}

}

stringArray(names)

//Q5. Write a JavaScript function that takes a string as input and reverses it using a while loop.
//  The function should return the reversed string.


function reverseString(word){

let name = true;

while (name) {
    
console.log(word.split("").reverse().join(''));

break;

}

}

reverseString("latifa")


