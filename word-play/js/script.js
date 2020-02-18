
var sentences = prompt("enter a sentence");
var words = sentences.split(' ');
var array = words.map(function(word){
  if (word.length >= 3 ){
    return word;
  }
})
alert(array.reverse());
