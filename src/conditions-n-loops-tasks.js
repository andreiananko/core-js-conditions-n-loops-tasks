/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */

function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */

function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  const dx = Math.abs(queen.x - king.x);
  const dy = Math.abs(queen.y - king.y);
  if (dx === dy) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  if (a === b || b === c || a === c) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(number) {
  if (typeof number !== 'number' || number < 1 || number > 39) {
    throw new Error('Input must be a number between 1 and 39.');
  }

  const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  let result = '';

  for (const numeral in romanNumerals) {
    const value = parseInt(numeral);

    while (number >= value) {
      result += romanNumerals[numeral];
      number -= value;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  if (typeof numberStr !== 'string') {
    throw new Error('Input must be a string representation of a number.');
  }

  const digitWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const specialWords = {
    '-': 'minus',
    '.': 'point',
  };

  let result = '';

  for (const char of numberStr) {
    if (digitWords.hasOwnProperty(char)) {
      result += `${digitWords[char]} `;
    } else if (specialWords.hasOwnProperty(char)) {
      result += `${specialWords[char]} `;
    } else {
      throw new Error(`Invalid character encountered: ${char}`);
    }
  }

  return result.trim();
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  // Validate that the input is a string
  if (typeof str !== 'string') {
    throw new Error('The input must be a string');
  }

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  if (typeof str !== 'string' || typeof letter !== 'string') {
    throw new Error('Both str and letter must be strings.');
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */

function isContainNumber(num, digit) {
  if (num < 0) {
    num = -num; // Make the number positive to simplify the loop
  }

  if (digit < 0 || digit > 9 || digit % 1 !== 0) {
    throw new Error(
      'The digit to search for must be a single digit number from 0 to 9'
    );
  }

  if (num === digit) {
    // If the number is the same as the digit
    return true;
  }

  while (num) {
    if (num % 10 === digit) {
      return true;
    }
    num = Math.floor(num / 10); // Go to the next digit
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */

function getBalanceIndex(arr) {
  let totalSum = 0;
  let leftSum = 0;

  // Calculate the total sum of the array
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  // Iterate through the array to find the balance index
  for (let i = 0; i < arr.length; i++) {
    // Update the total sum by subtracting the current element
    totalSum -= arr[i];

    // Check if sums on left and right are equal
    if (leftSum === totalSum) {
      return i;
    }

    // Update the left sum for the next iteration
    leftSum += arr[i];
  }

  // If no balance index is found, return -1
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (typeof size !== 'number' || size < 1) {
    throw new Error('Size must be a positive number.');
  }

  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push([]);
  }

  let num = 1;
  let topRow = 0;
  let bottomRow = size - 1;
  let leftColumn = 0;
  let rightColumn = size - 1;

  while (topRow <= bottomRow && leftColumn <= rightColumn) {
    // Fill top row
    for (let col = leftColumn; col <= rightColumn; col++) {
      matrix[topRow][col] = num++;
    }
    topRow++;

    // Fill right column
    for (let row = topRow; row <= bottomRow; row++) {
      matrix[row][rightColumn] = num++;
    }
    rightColumn--;

    // Fill bottom row
    for (let col = rightColumn; col >= leftColumn; col--) {
      matrix[bottomRow][col] = num++;
    }
    bottomRow--;

    // Fill left column
    for (let row = bottomRow; row >= topRow; row--) {
      matrix[row][leftColumn] = num++;
    }
    leftColumn++;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */

function rotateMatrix(matrix) {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Swap elements matrix[i][j] and matrix[j][i]
      // We can use destructuring to swap without a temporary variable
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reflect the matrix over the middle vertical line (mirror the matrix)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      // Swap elements matrix[i][j] and matrix[i][n - j - 1]
      // Again, we do this without a temporary variable
      [matrix[i][j], matrix[i][n - j - 1]] = [
        matrix[i][n - j - 1],
        matrix[i][j],
      ];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }

  const { length } = arr;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, iterations) {
  // Each iteration
  for (let iter = 0; iter < iterations; iter++) {
    let evenChars = '';
    let oddChars = '';

    // Construct strings of even and odd indexed characters
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        evenChars += str.charAt(i); // even indices
      } else {
        oddChars += str.charAt(i); // odd indices
      }
    }

    // Concatenate even-index characters with odd-index characters
    str = evenChars + oddChars;
  }

  return str;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  if (typeof number !== 'number' || number < 0) {
    throw new Error('Input must be a positive number.');
  }

  const digits = [];
  let temp = number;

  // Extract the digits from the number
  while (temp > 0) {
    const digit = temp % 10;
    digits.unshift(digit);
    temp = Math.floor(temp / 10);
  }

  const { length } = digits;

  // Find the first decreasing digit from the right
  let pivotIndex = -1;
  for (let i = length - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      pivotIndex = i;
      break;
    }
  }

  if (pivotIndex === -1) {
    return number; // No larger number can be formed
  }

  // Find the smallest digit larger than the pivot digit to the right of the pivot
  let smallestLargerIndex = pivotIndex + 1;
  for (let i = pivotIndex + 2; i < length; i++) {
    if (
      digits[i] > digits[pivotIndex] &&
      digits[i] < digits[smallestLargerIndex]
    ) {
      smallestLargerIndex = i;
    }
  }

  // Swap the pivot digit with the smallest larger digit
  const tempDigit = digits[pivotIndex];
  digits[pivotIndex] = digits[smallestLargerIndex];
  digits[smallestLargerIndex] = tempDigit;

  // Sort the digits to the right of the pivot in ascending order
  const sortedDigits = digits.slice(pivotIndex + 1).sort((a, b) => a - b);

  // Construct the final number by combining the digits
  let result = 0;
  for (let i = 0; i <= pivotIndex; i++) {
    result = result * 10 + digits[i];
  }
  for (let i = 0; i < sortedDigits.length; i++) {
    result = result * 10 + sortedDigits[i];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
