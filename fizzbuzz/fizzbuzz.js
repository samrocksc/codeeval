//Import filesystem from node
var fs = require("fs");

//Add blocking readFile to 3rd portion of node(argv[2]) argument.
//String together data and split along new lines
//forEach verifies that we will run the function following on each line of data
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line){
  //this is better for returning truthy/falsey
  if(line){ 
    //split line along spaces
    line = line.split(' ');

    
    x = line[0] //first divider
    y = line[1] //second divider
    n = line[2] //The amount of lines to process through will always be less than 20
    for(var i = 1; i <= n; i++){
      if(i % x === 0 && i % y === 0){
        process.stdout.write('FB');
      }else if(i % y === 0){
        process.stdout.write('B');
      }else if (i % x === 0){
        process.stdout.write('F');
      }else{
        process.stdout.write(i+'');
      }
//ensure spaces
      if(i < n){
        process.stdout.write(' ');
      }else{
        process.stdout.write('\n');
      }
    }
  }
});

