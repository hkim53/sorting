function split(wholeArray) {
  var index = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, index);
  var secondHalf = wholeArray.slice(index);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {

  return array;
}

function mergeSort(arr1, arr2) {
  var resultArray = [];
  while (arr1.length && arr2.length) {
    arr1[0] < arr2[0] ? resultArray.push(arr1.shift()) : resultArray.push(arr2.shift());
  }
  arr1.length ? resultArray = resultArray.concat(arr1) : resultArray = resultArray.concat(arr2);
  return resultArray;
}
