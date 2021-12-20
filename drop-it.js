function dropElements(arr, func) {
    const newArr = [];
    let found = false;
    for (let i = 0; i < arr.length; i++) {
      if (!found && func(arr[i])) {
        found = true;
      }
      if (found) {
        newArr.push(arr[i])
      }
    }
    return newArr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });