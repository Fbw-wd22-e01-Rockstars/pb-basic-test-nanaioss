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


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

