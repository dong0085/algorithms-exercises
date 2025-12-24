/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
// number = 1391, place = 0, longestNumber = 4

import snapshot from '../../src/sort-visualizer';

// returns 1
function getDigit(number, place, longestNumber) {
  /* const numStr = number.toString();
  const length = numStr.length;

  if (length < longestNumber) return 0;

  const digit = numStr[place];
  return parseInt(digit); */
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function getLongestNumber(nums) {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    const length = nums[i].toString().length;
    if (length > maxLength) maxLength = length;
  }
  return maxLength;
}

function radixSort(array) {
  // code goes here
  const longestNumber = getLongestNumber(array);

  const radixArray = Array.from({ length: 10 }, () => []);

  for (let i = 0; i < longestNumber; i++) {
    while (array.length) {
      const number = array[0];
      const digit = getDigit(number, i, longestNumber);
      radixArray[digit].push(array.shift());
    }

    for (let j = 0; j < radixArray.length; j++) {
      snapshot(array);
      while (radixArray[j].length) {
        array.push(radixArray[j].shift());
      }
    }
  }
  return array;
}

// unit tests
// do not modify the below code
describe('radix sort', function () {
  it('should sort correctly', () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it('should sort 99 random numbers correctly', () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});

export { radixSort };
