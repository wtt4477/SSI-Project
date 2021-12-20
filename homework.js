// Leetcode No.1, using the map to store key(nums[i]), value(i) pair from nums array and store in map to avoid duplicate finding, Time/Space complexity: O(n), O(n)

var twoSum = function(nums, target) {
  map = new Map();
  for (let i = 0; i < nums.length; i++) {
    x = target - nums[i];
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(nums[i], i);
  }
};

// Leetcode No.9, using the String method to transform the number to a string array and them use left and right pointer to check each one in the array

var isPalindrome = function(x) {
  let strNew = x.toString();
  let [left, right] = [0, strNew.length - 1];
  if (x => 0) {
    while (left <= right) {
      if (strNew[left] !== strNew[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
};

// Leetcode No.13, using map to store the relationship between letter and integer for I to M and compare the current number accords to the letter vs number accords to the letter after the current one. If current letter is larger, then should add, otherwise it should subtract

var romanToInt = function(s) {
  let temp = new Map();
  temp.set("I", 1);
  temp.set("V", 5);
  temp.set("X", 10);
  temp.set("L", 50);
  temp.set("C", 100);
  temp.set("D", 500);
  temp.set("M", 1000);
  let res = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let value = temp.get(s[i]);
    if (i < n - 1 && value < temp.get(s[i + 1])) {
      res -= value;
    } else {
      res += value;
    }
  }
  return res;
};

// Leetcode No.20,using map to store the key, value of the parenthesis and create a stack to store all parens from s. If string popped from stack !== value of parens, then return false

var isValid = function(s) {
  const paren = { ")": "(", "]": "[", "}": "{" };
  let stack = [];
  for (let p of s) {
    if (paren[p]) {
      if (stack.pop() !== paren[p]) {
        return false;
      }
    } else {
      stack.push(p);
    }
  }
  return stack.length === 0;
};

// Leetcode No.58, using the trim and split method to extract the string to be an array, then return the last element of the array

var lengthOfLastWord = function(s) {
  const arr = s.trim().split(" ");
  if (arr == "") {
    return 0;
  } else {
    return arr[arr.length - 1].length;
  }
};

//flatten an array by DFS

var flattenArray = function(arry) {
  var res = [];
  if (arry == null) {
    return null;
  }
  for (var i = 0; i < arry.length; i++) {
    if (Array.isArray(arry[i])) {
      res = res.concat(flattenArray(arry[i])); // recusion
    } else {
      res.push(arry[i]);
    }
  }
  return res;
};
