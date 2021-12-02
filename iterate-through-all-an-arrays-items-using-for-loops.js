function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      let mustPushArr = true;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === elem) {
          mustPushArr = false;
        }
      }
      if (mustPushArr === true) {
         newArr.push (arr[i]);
      }
      
    }
    // Only change code above this line
    return newArr;
  }