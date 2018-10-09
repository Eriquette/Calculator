// document.getElementById('sum').onclick = changeText
// document.getElementById('minus').onclick = changeText
// document.getElementById('times').onclick = changeText
// document.getElementById('divide').onclick = changeText
//
// function changeText(){
//   var val1 = parseInt(document.getElementById('val1').value)
//   var val2 = parseInt(document.getElementById('val2').value)
//
//
//   var sum = val1 + val2
//   document.getElementsByTagName('h2')[0].innerHTML = sum
// }

$(document).ready(function(){
  var num1 =  Number($('#val1').html());
  var num2 =  Number($('#val2').html());

  $("#sum").on("click",function(num1, num2){
    var prod = num1 + num2;
    $('#answer').html(prod);
  })
  $("#minus").on("click",function(){
    var prod = num1 - num2;
    $('#answer').append(prod);
  })
  $("#times").on("click",function(){
    var prod = num1 * num2;
    $('#answer').append(prod);
  })
  $("#divide").on("click",function(){
    var prod = num1 / num2;
    $('#answer').append(prod);
  })

})
