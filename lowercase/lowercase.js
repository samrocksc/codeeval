var fs  = require("fs");
//calls every line in the file by line
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
//verify that there is the presence of lines
    if (line) {
//log each line utilizing javascript .toLowerCase() method
      console.log(line.toLowerCase());
    }
});
