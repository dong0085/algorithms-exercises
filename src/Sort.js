import React from 'react';
import { shuffle, range } from 'lodash';
import { App, snapshot, done, clear } from './sort-visualizer';

import './sort.css';
function bubbleSort(nums) {
  // Loop through the array
  const length = nums.length;
  let iterations = 0;
  let swapped;
  do {
    swapped = false;
    snapshot(nums);
    for (let i = 0; i < length - iterations; i++) {
      // if current number is bigger than the next, do swap

      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = swapped ? swapped : true;
      }
    }
    iterations++;
  } while (swapped == true);
  return nums;
}

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    snapshot(nums);
    let current = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
  }
  return nums;
}

function quickSort(nums) {
  // code goes here
  // base case
  if (nums.length <= 1) return nums;

  const pivot = nums.pop();
  // divide in to left and right
  const left = [];
  const right = [];
  while (nums.length) {
    if (nums[0] < pivot) {
      left.push(nums.shift());
    } else {
      right.push(nums.shift());
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  let result = sortedLeft.concat(pivot, sortedRight);
  snapshot(result);
  return result;
}

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

function sort(array) {
  // do cool stuff here
  // bubbleSort(array);
  // insertionSort(array);
  // quickSort(array);
  radixSort(array);
  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  snapshot(array);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(30)));
  done();
  return <App />;
}
