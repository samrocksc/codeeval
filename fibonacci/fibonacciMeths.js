//building a prototype to memoize our data
Function.prototype.memoize = function() {
	var self = this, cache = {};
    return function(num) {
    	if(cache[num]) {
            console.log('cache hit!');
            return cache[num];
        } else {
            console.log('computing fibonacci');
            return cache[num] = self(num);
        }
    };
}

//using a fore loop to store our data

var fib = function(n) {
	var a=0, b=1, f=1;
    for(var i=2; i<n; i++) {
    	f = a+b;
        a = b;
        b = f;
    }
    return f;
}

var fastFib = fib.memoize();

console.log(fastFib(10));
console.log(fastFib(13));
console.log(fastFib(10));
console.log(fastFib(12));
