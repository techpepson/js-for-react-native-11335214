//Task 1

// A javascript function that takes an array of numbers as an argument and returns a double of the args when the number is even and returns a tripled value when the arg is odd

function processArray(arr) {
  // loop through each item in the array using forEach
  return arr.map((num) => {
    if (num % 2 === 0) {
      //return a doubled value when the division is even
      return (num **= 2);
    } else {
      //triple the value when when the division is not even
      return (num **= 3);
    }
  });
}
//initialize the processArray
const result = processArray([1, 2, 3, 4, 6, 8, 9, 100]);
//console.log the result of processArray
console.log(result);

//Task 2
//formatArrayStrings function that will take a string array and a number array
function formatArrayString(numArray, strArray) {
  //map through the numArray
  return numArray.map((number) => {
    if (number % 2 === 0) {
      //map through the strArray
      return strArray.map((str) => {
        return str.toUpperCase();
      });
    } else {
      return strArray.map((string) => {
        return string.toLowerCase();
      });
    }
  });
}

//initialize the function
const task2Result = formatArrayString(processArray([1, 2, 3, 4, 5, 6]), [
  "Peprah",
  "Dickson",
  "Daniel",
  "Yaw",
  "Busumuru",
  "Festus",
]);

console.log(task2Result);

module.exports = {
  arrayString: formatArrayString,
};
