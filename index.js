// Add answers here 

//!#### 1. Los or New?

function nameOfCity(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
                            || (str.substring(0, 3) == 'New')))
     
        {
            return str;
      }
  
    return 'The city name does not begin with Los or New';
  }
  
  console.log(nameOfCity("New York"));
  console.log(nameOfCity("Los Angeles"));
  console.log(nameOfCity("London"));



//! #### 2. isDivisible?


function isDivisible(a) {
    if (a % 100) {
        console.log("true");
        return;

    }else {
        console.log("false");
    }
}
isDivisible(1);
isDivisible(1000);
isDivisible(100);


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

