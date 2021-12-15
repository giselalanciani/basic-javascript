function repeatStringNumTimes(str, num) {
    var holder = [];
          for(var i=0; i<num; i++) {
              holder.push(str);
          }
          return holder.join('');
      }
  
  repeatStringNumTimes("abc", 3);