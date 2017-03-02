describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles single element', function(){
    expect( mergeSort([5]) ).toEqual( [5] );
  });

  it('handles multiple elements', function(){
    expect( mergeSort([6,3,0,2,8,9,7,2]) ).toEqual( [0,2,2,3,6,7,8,9]);
  });
});

describe('Merge function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([5, 2, 3, 4, 7]) ).toEqual([[5, 2],[3, 4, 7]])
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([5, 2, 3, 4, 7]) ).toEqual([5, 2],[3, 4, 7])
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergeSort([2, 3, 4], [1, 5, 6]) ).toEqual([1, 2, 3, 4, 5, 6])
  });
});
