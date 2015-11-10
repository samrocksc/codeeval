var fs  = require("fs");
//function for email validation.  The regexp string is pretty common, we are just looping through for console.log
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var validateEmail = function(data){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(data)
  }
  if (line) {
    if(validateEmail(line) === true){
      console.log('true')
    }else{
      console.log('false')
    }
  }
});
