function findLongestWordLength(str) {
    var array = str.split(/\s+/);
   var wordLength = array.map(function(i) {
     return i.length;                       
   });   
   var largest = Math.max.apply(Math, wordLength);   
   return largest; 
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");