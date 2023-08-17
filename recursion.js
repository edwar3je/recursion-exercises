/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1
  
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestLength=0) {
  if(words.length === 0) return longestLength

  else if(words[0].length > longestLength){
    longestLength = words[0].length
  }
  return longest(words.slice(1), longestLength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) return ""

  return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, forwardIndex=0, reverseIndex=(str.length - 1)) {
  while(reverseIndex > -1){
    if(str[forwardIndex] !== str[reverseIndex]){
      return false
    }
    forwardIndex += 1;
    reverseIndex -= 1;
    return isPalindrome(str, forwardIndex, reverseIndex)
  }

  return true
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index=0, foundIndex=-1) {
  if(index === arr.length) return foundIndex

  else if(arr[index] === val && foundIndex === -1){
    foundIndex = index;
    index += 1;
    return findIndex(arr, val, index, foundIndex)
  }
  else if(arr[index] === val && foundIndex !== -1){
    index += 1;
    return findIndex(arr, val, index, foundIndex)
  }
  else {
    index += 1;
    return findIndex(arr, val, index, foundIndex)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return ""

  return revString(str.slice(1)) + str[0]
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  for (let key in obj){
    if(typeof(obj[key]) === "object"){
      gatherStrings(obj[key], arr)
    }
    else if(typeof(obj[key]) === "string"){
      arr.push(obj[key])
    }
  }

  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIndex=0, rightIndex=((arr.length) - 1)) {
  if(leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleVal = arr[middleIndex];
    if (middleVal < val){
      leftIndex = middleIndex + 1;
      return binarySearch(arr, val, leftIndex, rightIndex)
    }
    else if(middleVal > val){
      rightIndex = middleIndex - 1;
      return binarySearch(arr, val, leftIndex, rightIndex)
    }
    else {
      return middleIndex;
    }
  }
  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
