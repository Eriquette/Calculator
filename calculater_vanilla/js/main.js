document.getElementById('sum').onclick = add
document.getElementById('minus').onclick = subtract
document.getElementById('times').onclick = multiply
document.getElementById('divide').onclick = division


function add(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 + val2;
  document.getElementsByTagName('h2')[0].innerHTML = sum;
}

function subtract(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var minus = val1 - val2;
  document.getElementsByTagName('h2')[0].innerHTML = minus;
}

function multiply(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var multi = val1 * val2;
  document.getElementsByTagName('h2')[0].innerHTML = multi;
}

function division(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var divide = val1 / val2;
  document.getElementsByTagName('h2')[0].innerHTML = divide;
}
