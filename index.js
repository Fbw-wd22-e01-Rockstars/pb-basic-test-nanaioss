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


//!#### 4. What's the weather?
function isRaining(rain){
    return rain ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home"
}

isRaining(true)


//? ### Loops 

//! #### 1. Sequence

function geometricalSequence(number) {    
    let sum = "";    for(let i=0; i<=number; i++) {        
        sum += " " +i*2
    }    
    return sum
  }
  console.log(geometricalSequence(5))

//! 2. Multiples

function multiplesOfThree(number) {    
    let sum = "";    for(let i=1; i<=number; i++) {        
        sum += " " +i*3
    }    
    return sum
  }
  console.log(multiplesOfThree(5))
  multiplesOfThree(6); 



//? ### Math 

//! #### 1. You've got the power

function powerOf(num) {
    return Math.pow(num, num)
}
console.log(powerOf(3))
console.log(powerOf(4))


//! ### 1. How many?

const vowels = ['A', 'E', 'I', 'O', 'U'];
function vowelCount(string) {
    let count = 0;
    for( const v of string) {
        if( vowels.includes(v.toUpperCase())) {
            count++;
        }
    }
    return count;
}

console.log(vowelCount('sky'));
console.log(vowelCount("Hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

