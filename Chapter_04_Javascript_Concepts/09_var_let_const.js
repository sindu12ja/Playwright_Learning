var v = 10;
let l = 10;
const c = 3.14;
console.log(v);
console.log(l);
console.log(c);


// for, functions

var testcases = ["login", "logout", "signup"];
for (var i = 0; i < testcases.length; i++) {
    console.log("Running test:", testcases[i]);
}
console.log("Loop counter leaked outside:", i);