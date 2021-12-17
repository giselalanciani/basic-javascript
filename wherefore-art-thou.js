function whatIsInAName(collection, source) {
  
    // Only change code below this line
  const argKeys = Object.keys(source);
  
              return collection.filter(function(obj) {
                return argKeys.every(function(key) {
                  return obj.hasOwnProperty(key) && obj[key] === source[key];
                });
              });
           }