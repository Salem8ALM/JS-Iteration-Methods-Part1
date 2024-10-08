const numbers = [10, 13, 20, 25, 38, 35, 40];
/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const greaterThanTwentyFive = numbers.filter((number) => number > 25);
console.log(greaterThanTwentyFive);

const divisbleByFive = numbers.filter((number) => number % 5 === 0);
console.log(divisbleByFive);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const squared = numbers.map((number) => number ** 2);
console.log(squared);

const multiplied = numbers.map((number) => number * 2);
console.log(multiplied);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const greaterThanTwenty = numbers.filter((number) => number >= 20);
const squaredGreater = greaterThanTwenty.map((number) => number ** 2);
console.log(greaterThanTwenty);
console.log(squaredGreater);

const divisibleByFiveMapped = numbers.filter((number) => number % 5 === 0);
const multiplyDivisible = divisibleByFiveMapped.map((number) => number * 3);
console.log(divisibleByFiveMapped);
console.log(multiplyDivisible);
