//let is block-scopped

let x = "global";
if (true) {
    let x = "block";
    console.log(x);
}