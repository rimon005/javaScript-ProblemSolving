// Problem 1 => Give an array of integers , replace all the occurrences of elementToReplace with subtractionElement
// Example => For inputArray = [1,2] , elementToReplace 1 = and subtractionElem = 3 , the output should be arrayReplace(inputArray, elementToReplace, subtractionElement) = [3 , 2 ,3]

function arrayReplace(inputArray, elementToReplace, subtractionElement) {
  inputArray.forEach((element, index) => {
    console.log(element, index);
    if (element === elementToReplace) {
      inputArray[index] = subtractionElement;
    }
  });
  console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);

// Problem 2 =>
// 1. Write a function that returns the sum of tow numbers .
// 2. Write a function that returns the sum fo all numbers regardless of params
// Example => For param1 = 1 and param2 = 2 , the output should be add (param1 , param2) = 3

function sum(params1, params2) {
  return params1 + params2;
}
console.log(sum(1, 2));

function totalSum(...params1) {
  let total = 0;
  params1.forEach((SingleElement) => {
    total += SingleElement;
  });
  return total;
}
console.log(totalSum(1, 2, 4));
