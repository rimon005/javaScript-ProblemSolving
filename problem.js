// Problem 1
// Give an array of integers , replace all the occurrences of elementToReplace with subtractionElement

/**
 * Example :
 *
 * For inputArray = [1,2] , elementToReplace 1 = and subtractionElem = 3 , the output should be arrayReplace(inputArray, elementToReplace, subtractionElement) = [3 , 2 ,3]
 * */

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

// Problem 2
