//require the arrayManipulation module
// const arrayStringFunction = require("./arrayManipulation");

//extract the exported arrayString function
// const arrayString = arrayStringFunction.arrayString;

function createUserProfiles(originalName, modifiedName) {
  //empty array that will have data pushed to it.
  const arrayObject = [];

  //loop through the originalName array
  originalName.forEach((actualName, index) => {
    const incrementedActualIndex = ++index;
    arrayObject.push({
      actualName,
      modifiedName,
      incrementedActualIndex,
    });
  });

  return arrayObject;
}

//initialize the createUserProfiles function
const userInfoResult = createUserProfiles(
  ["Peprah", "Dickson", "Daniel", "Yaw", "Busumuru", "Festus"],
  ["Johnny", "I am Dickson", "etc", "ie"]
);

console.log(userInfoResult);
