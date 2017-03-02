function bubbleSort(array) {
  for(var j = 0; j < array.length-1; j++) {
    for(var i = 0; i < array.length-1-j; i++) {
      var temp = array[i];
      if(array[i] > array[i+1]) {
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
  }
  return array;
}
