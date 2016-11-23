$(document).ready(function(){

  var cipher =  function(sentence){
  var one = sentence.charAt(0).toUpperCase();
  var two = sentence.slice(-1).toUpperCase();
  return one + two
  }

    var rever = function(sentence){
    var reverse =sentence.split('').reverse().join('')
    var one = reverse.charAt(0).toUpperCase();
    var two = reverse.slice(-1).toUpperCase();
    return one + two
  }
    var three = function(){
    alert(cipher(sentence))
    alert(rever(sentence))
    alert(sentence + reverse(sentence))
    }
    var  four = function(sentence){
      var length = sentence.length
      var position= sentence.charAt(length / 2)
      alert(position + sentence + rever(sentence))
    }

    var sentence = prompt("Enter a sentence");
   alert(four(sentence))

});
