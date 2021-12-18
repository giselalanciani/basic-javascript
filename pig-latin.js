function translatePigLatin(str) {
    let vowels = /[aeiou]/g;
    var n = str.search(vowels); //will find the index of vowels
    switch (n){
      case 0:
        str = str+"way";
        break;
      case -1:
        str = str+"ay";
        break;
      default:
        str = str.slice(n)+str.slice(0,n)+"ay";
        break;
    }
    return str;
  }
  
  translatePigLatin("consonant");