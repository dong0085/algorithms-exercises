/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/
const merge = (a, b) => {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[i]) {
      newArr.push(a[i]);
      i++;
    } else {
      newArr.push(b[i]);
      j++;
    }
  }
  return [...newArr, ...a.slice(i), ...b.slice(i)];
};

const mergeV2 = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result.concat(left, right);
};

const mergeSort = (nums) => {
  // code goes here
  if (nums.length == 1) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  const leftSide = nums.slice(0, middle);
  const rightSide = nums.slice(middle);

  const sortedLeft = mergeSort(leftSide);
  const sortedRight = mergeSort(rightSide);

  return merge(sortedLeft, sortedRight);
};

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
