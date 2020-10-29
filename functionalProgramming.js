/*
using simple functions we create an array depending on the amount of cups of tea we set, and what type (green vs black)
*/
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
// each time this loops, it pulls a string from a prepareTea function and adds into array
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

// return our finished array.. it should be 27 greenTeas and 13 blackTeas
  return teaCups;
};

// call our getTea function with 2 with 2 set of parameters
const tea4GreenTeamFCC = getTea (prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea (prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
