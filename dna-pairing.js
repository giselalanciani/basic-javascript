function pairElement(str) {
    var pairs = {
          A: ["A","T"],
          T: ["T","A"],
          C: ["C","G"],
          G: ["G","C"]
      };
  
      return str.split("").map(function (a) { 
          return pairs[a];
      });
  }
  
  pairElement("GCG");