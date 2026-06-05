// TODO: Create a function that validates user input
let userInput = prompt("Please enter your name: ");

function validateInput(userInput) {
    try {
    if (typeof userInput !== "string") {
      throw new Error("Input must be a string.");
    }
    return console.log (`Hello, ${userInput}!`);
  }
    catch(error) {
    console.error(`[Caught an Error!] Name: ${error.name} | Message: ${error.message}`);
  }
}
validateInput(userInput);

// TODO: Create a function that demonstrates multiple error types
  
let errorDemonstration = "123456"; 

function errorDisplay(input) {
  try {

    if (typeof input !== "string") {
      throw new TypeError("Parameter needs to be a string.");
    }

    if (input.length > 5) {
      throw new RangeError("String is way too long!");
    }

    console.log(`Success: ${input}`);

  } catch (error) {
    
    console.error(`[Caught an Error!] Name: ${error.name} | Message: ${error.message}`);
    

    if (error instanceof TypeError) {
      console.log("Fix hint: Please pass a valid string next time.");
    } else if (error instanceof RangeError) {
      console.log("Fix hint: Keep your string short and sweet.");
    }
  }
}

errorDisplay(errorDemonstration);


// TODO: Create a collection of helper functions for string manipulation
const stringHelpers = {
    reverseString: function(str) {
      return str.split("").reverse().join("");
    },

    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    countCharacters: function(str) {
      return str.length;
    },

    toLowerCase: function(str) {
      return str.toLowerCase()
    },

    toUpperCase: function(str) {
      return str.toUpperCase();
    }
};

console.log(stringHelpers.reverseString("Hello World!")); // Output: !dlroW olleH
console.log(stringHelpers.capitalize("hello world!")); // Output: Hello world!
console.log(stringHelpers.countCharacters("Hello World!")); // Output: 12
console.log(stringHelpers.toLowerCase("Hello World!")); // Output: hello world!
console.log(stringHelpers.toUpperCase("Hello World!")); // Output: HELLO WORLD!


// TODO: Create helper functions for array operations
const arrayHelpers = {
    sumArray: function(arr) {
      return arr.reduce((acc, num) => acc + num, 0);
    },
    findMax: function(arr) {
      return Math.max(...arr);
    },
    findMin: function(arr) {
      return Math.min(...arr);
    }
}; 

console.log(arrayHelpers.sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(arrayHelpers.findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(arrayHelpers.findMin([1, 2, 3, 4, 5])); // Output: 1

