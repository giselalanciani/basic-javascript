function findElement(arr, func) {
    "use strict"
    return arr.find(func); // non point-free version: arr.find(n => func(n))
  }
  
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);