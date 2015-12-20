var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(looping(line));
  }
});

//simple looping method of fibonacci
function looping(n) {
  var a = 0, b = 1, f = 1;
  for(var i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
};

//a recrusive way of doing fibonacci
function recursive(n) {
  if(n <= 2) {
    return 1;
  } else {
    return this.recursive(n - 1) + this.recursive(n - 2);
  }
};

