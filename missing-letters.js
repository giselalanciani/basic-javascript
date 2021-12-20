function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var first = alphabet.indexOf(str[0]);
    var last = alphabet.indexOf(str[str.length-1]);
    var alpha = alphabet.slice(first,last);
  
    for(var i=0;i<str.length;i++){
      if(str[i] !== alpha[i]){
        return alpha[i];
      }
    } 
  }
  
  fearNotLetter("abce");