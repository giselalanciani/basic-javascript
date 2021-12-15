function confirmEnding(str, target) {
    return target.length > 0 && target === str.substr(str.length - target.length);
 }
 
 confirmEnding("Bastian", "n");