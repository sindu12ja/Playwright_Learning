

console.log(API_END_APP_VWO_COM);
console.log("dasda");

if (true) {

}

const API_END_APP_VWO_COM = "https://app.vwo.com";


//Explanation for TDZ
//"The variable is hoisted but not initialized. Accessing it before the declaration line causes a Temporal Dead Zone error.
 
//This is a Temporal Dead Zone example. The constant API_END_APP_VWO_COM is hoisted to memory, but it remains uninitialized until the declaration statement is reached. Since I am trying to access it before initialization, JavaScript throws a ReferenceError: Cannot access 'API_END_APP_VWO_COM' before initialization.
 