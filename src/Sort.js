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

function sort(array) {
  // do cool stuff here
  // bubbleSort(array);
  // insertionSort(array);
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
