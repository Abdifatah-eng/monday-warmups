let suits = ["spedes", "hearts", "clubs", "diomands"];
   let values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "quen", "king"];
    let total = 0;

      suits.forEach(function(suit) {
      values.forEach(function(value){

total = total +1
     document.write(value + " of " +suit+"<br>");
    });
document.write("<br>");
});
document.write(total);
