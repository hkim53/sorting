describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles single element', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });

  it('handles multiple elements', function(){
    expect( bubbleSort([6,3,0,2,8,9,7,2]) ).toEqual( [0,2,2,3,6,7,8,9]);
  });
});
