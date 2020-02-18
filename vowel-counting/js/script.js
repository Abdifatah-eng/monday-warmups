let vowel = function(str){
  let matches = str.match(/[aeiou]/gi);
  let count = matches ?
  matches.length: 0;

  document.getElementById('p').innerHTML = "'"+str+"contains"+count+"vowel(s)";
  return false;
};
encrypt("Have a nice day. Feed the dog & chill out!");
