//https://nodejs.org/api/fs.html#fs_fs_stat_path_callback
var fs  = require("fs");
var filename = process.argv[2];
var stats = fs.statSync(filename);

console.log(stats.size);

