// Will print out the sum of numbers given as an argument.
function sumDigits(number) {
  var str = number.toString();
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);

  }
console.log(sum);
}

sumDigits(234);
