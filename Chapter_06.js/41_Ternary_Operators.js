let sindu_Age = 20;
let sindu_will_goa = sindu_Age > 18 ? "sindu_Can_go" : "No";
console.log(sindu_will_goa);


let actualStatusCode = 200;
let expectedStatusCode = 200;

let testResult = actualStatusCode === expectedStatusCode
    ? "✅ PASS"
    : "❌ FAIL";

console.log(testResult); // ✅ PASS

let environment = "staging";

let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";

console.log(baseUrl);


//nested ternary ---can have multiple conditions

//////////------------------------------------------


let a = 10, c = 90;
let max1 = (a > c) ? a : c;
console.log("Max num is:", max1);


let e = 10, f = 190, g = 90;
let max = (e > f)
    ? ((e > g) ? e : g)
    : ((f > g) ? f : g)

console.log("Max num is:", max);






