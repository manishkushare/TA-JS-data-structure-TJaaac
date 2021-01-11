// 1. Create an array named numbers and store 5 number values in it
let numbers = [5,7,16,20,27];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum =0;
for(let number of numbers){
    sum += number;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
var average = (numbers.length/2);   
// 4. Find the highest number in the array and print it to the console using console.log()
var max= Math.max(...numbers);
// 5. Find the lowest number in the array and print it to the console using console.log()
var min = Math.min(...numbers);
// 6. Find the even numbers in the array and print them to the console using console.log()
for(let number of numbers){
    if(number % 2 === 0) {
        console.log(number);
    }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let number of numbers){
    if(number % 2 !== 0) {
        console.log(number);
    }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let number of numbers){
    if(number % 5 === 0) {
        console.log(`yes , divisible by 5 :`, number);
    }
}
// 9. Log all the element of the array one by one
for(let number of numbers){
    console.log(number);
}
// 10. Find all the number in the array that is divisible by 3
for(let number of numbers){
    if(number % 3 === 0) {
        console.log(`yes , divisible by 3 :`, number);
    }
}