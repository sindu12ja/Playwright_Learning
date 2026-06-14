//with literal 

let firstname = "sindu";
let fullname = `Hi ${firstname} sai`;
console.log(fullname);


let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.onec.com`;
console.log(apiUrl)
