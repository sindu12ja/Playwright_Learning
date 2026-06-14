// Difference between null and undefined in JavaScript

// 1. UNDEFINED
// - undefined means a variable has been declared but has not been assigned a value
// - It's the default value for uninitialized variables
// - It's also the return value of functions that don't return anything explicitly
// - undefined is a primitive type in JavaScript

let myVar;
console.log(myVar);  // Output: undefined

function noReturn() {
    // This function doesn't return anything
}
console.log(noReturn());  // Output: undefined

// Accessing object properties that don't exist
let obj = {};
console.log(obj.property);  // Output: undefined

// Function parameters that aren't provided
function greet(name) {
    console.log(name);  // If not provided, it will be undefined
}
greet();  // Output: undefined


// 2. NULL
// - null is an assignment value (intentionally set to mean "no value")
// - It represents the intentional absence of any object value
// - null must be explicitly assigned
// - null is also a primitive type (though typeof null returns "object" - this is a quirk in JS)
// - null is used to explicitly indicate "no value" or "empty"

let emptyValue = null;
console.log(emptyValue);  // Output: null

let result = null;  // Programmer explicitly set it to null


// 3. KEY DIFFERENCES

console.log("\n--- Key Differences ---");

// Difference 1: Type
console.log("typeof undefined:", typeof undefined);  // "undefined"
console.log("typeof null:", typeof null);            // "object" (this is a known quirk)

// Difference 2: Strict vs Loose Equality
console.log("\nEquality Comparison:");
console.log("undefined == null:", undefined == null);    // true (loose equality)
console.log("undefined === null:", undefined === null);  // false (strict equality)

// Difference 3: Origin
// - undefined is JavaScript's default when nothing is initialized
// - null is what a programmer explicitly sets

// Difference 4: Common Usage
// - undefined: Often indicates an error or missing value that wasn't intended
// - null: Often indicates an intentional empty state

console.log("\n--- Common Scenarios ---");

// Undefined scenarios:
let uninitializedVar;
console.log("Uninitialized variable:", uninitializedVar);  // undefined

function testReturn() {
    if (true) {
        // no return statement
    }
}
console.log("Function with no return:", testReturn());  // undefined

let array = [1, 2, 3];
console.log("Non-existent array index:", array[10]);  // undefined

let person = { name: "John" };
console.log("Non-existent object property:", person.age);  // undefined


// Null scenarios:
let userInput = null;  // User provided no input
console.log("Intentional empty value:", userInput);  // null

function processData(data) {
    if (!data) {
        return null;  // Explicitly returning "no result"
    }
    return data;
}
console.log("Function returning null:", processData(null));  // null


// 4. PRACTICAL EXAMPLE: Checking for both

function checkValue(val) {
    if (val === undefined) {
        console.log("Value is undefined - variable not initialized");
    } else if (val === null) {
        console.log("Value is null - intentionally set to no value");
    } else {
        console.log("Value exists:", val);
    }
}

console.log("\n--- Practical Checks ---");
checkValue();           // undefined - variable not initialized
checkValue(null);       // null - intentionally set to no value
checkValue("Hello");    // Value exists: Hello
checkValue(0);          // Value exists: 0
