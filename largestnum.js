const findLargestNumber = (arr) => {
    let largestNumber = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largestNumber) {
        largestNumber = arr[i];
      }
    }
  
    return largestNumber;
  };
  const numbers = [5, 10, 2, 8, 3];
  const largestNumber = findLargestNumber(numbers);
  console.log(largestNumber); 
  