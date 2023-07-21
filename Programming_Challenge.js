/* eslint-disable no-console */
const whatImLookingFor = (type, array) => {
  if (type === 'letters') {
    if (array.some((element) => typeof element === 'string')) {
      const regexLetters = /[A-Z]+$/i;

      const filteredArray = array.filter((element) => regexLetters.test(element));

      const newArray = [];

      filteredArray.forEach((element) => {
        if (element.length > 1) {
          const splitLetters = element.split('');
          return newArray.push(...splitLetters);
        }
        return newArray.push(element);
      });

      return newArray;
    }
    return 'None of these elements are letters';
  }

  if (array.some((element) => typeof element === 'number')) {
    const regexNumbers = /^[0-9]+$/;

    const filteredArray = array.filter((element) => regexNumbers.test(element));

    return filteredArray;
  }

  return 'None of these elements are numbers';
};

const largestNumber = (array) => {
  const numbers = whatImLookingFor('numbers', array);
  if (typeof numbers === 'string') {
    return 'None of these elements are numbers';
  }

  return Math.max(...numbers);
};

const ARRAY1 = ['a', 10, 'b', 'hello', 122, 15];
const ARRAY2 = ['a', 10, 'b', 'hello', 122, 15, 'a', 10, 'b', 'hello', 122, 15, 'a', 10, 'b', 'hello', 122, 15];
const ARRAY3 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Aenean', 'ac', 'laoreet', 'augue'];
const ARRAY4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(whatImLookingFor('letters', ARRAY1));
console.log(whatImLookingFor('letters', ARRAY2));
console.log(whatImLookingFor('letters', ARRAY3));
console.log(whatImLookingFor('letters', ARRAY4));
console.log(whatImLookingFor('numbers', ARRAY1));
console.log(whatImLookingFor('numbers', ARRAY2));
console.log(whatImLookingFor('numbers', ARRAY3));
console.log(whatImLookingFor('numbers', ARRAY4));

console.log(largestNumber(ARRAY1));
console.log(largestNumber(ARRAY2));
console.log(largestNumber(ARRAY3));
console.log(largestNumber(ARRAY4));
