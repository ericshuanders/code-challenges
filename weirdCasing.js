
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRi



function toWeirdCase(string) {
  if (string.includes(" ")) {
    const arrayOfWords = string.split(" ");

    const arrayOfLetters = arrayOfWords.map((word) => word.split(""));

    let answer = [];
    for (let i = 0; i < arrayOfLetters.length; i++) {
      let result = [];
      for (let j = 0; j < arrayOfLetters[i].length; j++) {
        if (j % 2 === 0) {
          result.push(arrayOfLetters[i][j].toUpperCase());
        } else {
          result.push(arrayOfLetters[i][j].toLowerCase());
        }
      }
      answer.push(result.join(""));
    }

    return answer.join(" ");
  } else {
    const array = string.split("");
    let answer = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        answer.push(array[i].toUpperCase());
      } else {
        answer.push(array[i].toLowerCase());
      }
    }
    return answer.join("");
  }
}
