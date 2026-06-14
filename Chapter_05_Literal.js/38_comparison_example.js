/**
 * Comparison Operators: == vs ===
 * Understanding the difference between loose equality and strict equality
 */

// ============================================================================
// 1. LOOSE EQUALITY (==)
// ============================================================================
// Uses type coercion - converts both operands to the same type before comparing

console.log("=== LOOSE EQUALITY (==) - WITH TYPE COERCION ===\n");

console.log("5 == '5':", 5 == '5');                    // true (string '5' converted to number 5)
console.log("5 == 5:", 5 == 5);                        // true
console.log("true == 1:", true == 1);                  // true (true converted to 1)
console.log("false == 0:", false == 0);                // true (false converted to 0)
console.log("null == undefined:", null == undefined);  // true (special case)
console.log("'0' == false:", '0' == false);            // true ('0' and false both convert)
console.log("'' == 0:", '' == 0);                      // true (empty string converts to 0)
console.log("[] == false:", [] == false);              // true (array converts)
console.log("[] == '':", [] == '');                    // true (array converts to empty string)

// ============================================================================
// 2. STRICT EQUALITY (===)
// ============================================================================
// No type coercion - both type and value must match exactly

console.log("\n=== STRICT EQUALITY (===) - NO TYPE COERCION ===\n");

console.log("5 === '5':", 5 === '5');                    // false (different types)
console.log("5 === 5:", 5 === 5);                        // true
console.log("true === 1:", true === 1);                  // false (boolean vs number)
console.log("false === 0:", false === 0);                // false (boolean vs number)
console.log("null === undefined:", null === undefined);  // false (different types)
console.log("'0' === false:", '0' === false);            // false (string vs boolean)
console.log("'' === 0:", '' === 0);                      // false (string vs number)
console.log("[] === false:", [] === false);              // false (array vs boolean)
console.log("[] === '':", [] === '');                    // false (array vs string)

// ============================================================================
// 3. DETAILED EXAMPLE - PRACTICAL SCENARIOS
// ============================================================================

console.log("\n=== PRACTICAL EXAMPLES ===\n");

const userAge = "25";  // Age comes from form input (string)
const minAge = 25;     // Minimum age required (number)

console.log("Scenario: User age from form is a string '25'");
console.log("userAge == minAge:", userAge == minAge);    // true (with coercion)
console.log("userAge === minAge:", userAge === minAge);  // false (strict check)

// Better practice: Convert type first
const userAgeNumber = Number(userAge);
console.log("After conversion - userAgeNumber === minAge:", userAgeNumber === minAge);  // true

// ============================================================================
// 4. COMPARISON WITH NULL AND UNDEFINED
// ============================================================================

console.log("\n=== NULL AND UNDEFINED COMPARISONS ===\n");

let value1 = null;
let value2 = undefined;
let value3 = 0;

console.log("null == undefined:", value1 == value2);      // true
console.log("null === undefined:", value1 === value2);    // false

console.log("null == 0:", value1 == value3);              // false
console.log("null === 0:", value1 === value3);            // false

console.log("undefined == 0:", value2 == value3);         // false
console.log("undefined === 0:", value2 === value3);       // false

// ============================================================================
// 5. COMPARISON TABLE
// ============================================================================

console.log(`
┌──────────────────┬────────────┬────────────┬──────────────────┐
│ Expression       │ ==         │ ===        │ Reason           │
├──────────────────┼────────────┼────────────┼──────────────────┤
│ 5 == '5'         │ true       │ false      │ Type coercion    │
│ true == 1        │ true       │ false      │ Type coercion    │
│ null == undefined│ true       │ false      │ Special case     │
│ '0' == false     │ true       │ false      │ Type coercion    │
│ 0 === 0          │ true       │ true       │ Same type & val  │
│ '' == 0          │ true       │ false      │ Type coercion    │
│ [] == ''         │ true       │ false      │ Type coercion    │
└──────────────────┴────────────┴────────────┴──────────────────┘
`);

// ============================================================================
// 6. BEST PRACTICES AND RECOMMENDATIONS
// ============================================================================

console.log("\n=== BEST PRACTICES ===\n");

console.log("❌ AVOID (Loose Equality):");
console.log("   if (userAge == 25) { ... }");
console.log("   if (status == true) { ... }");

console.log("\n✅ RECOMMENDED (Strict Equality):");
console.log("   if (userAge === 25) { ... }");
console.log("   if (status === true) { ... }");

console.log("\n✅ BETTER (Explicit Type Conversion):");
console.log("   if (Number(userAge) === 25) { ... }");
console.log("   if (status === true) { ... }");

// ============================================================================
// 7. PRACTICAL CODE EXAMPLE
// ============================================================================

console.log("\n=== REAL-WORLD EXAMPLE ===\n");

function checkUserStatus(status) {
  // ❌ WRONG - Using loose equality
  if (status == 1) {
    console.log("❌ User is active (loose)");
  }
  
  // ✅ CORRECT - Using strict equality
  if (status === 1) {
    console.log("✅ User is active (strict)");
  }
  
  // ✅ BETTER - Explicit type check
  if (Number(status) === 1) {
    console.log("✅ User is active (explicit conversion)");
  }
}

checkUserStatus("1");  // String "1"
checkUserStatus(1);    // Number 1

// ============================================================================
// 8. NOT EQUAL OPERATORS
// ============================================================================

console.log("\n=== NOT EQUAL OPERATORS ===\n");

console.log("5 != '5':", 5 != '5');        // false (loose inequality)
console.log("5 !== '5':", 5 !== '5');      // true (strict inequality)
console.log("5 != 5:", 5 != 5);            // false
console.log("5 !== 5:", 5 !== 5);          // false

// ============================================================================
// SUMMARY
// ============================================================================

console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    SUMMARY: == vs ===                         ║
╠════════════════════════════════════════════════════════════════╣
║ ==  (Loose Equality)                                           ║
║     • Performs type coercion before comparison                 ║
║     • Can lead to unexpected results                           ║
║     • AVOID using in production code                           ║
║                                                                ║
║ === (Strict Equality)                                          ║
║     • NO type coercion - types must match exactly              ║
║     • More predictable and safer                               ║
║     • ALWAYS use this in production code                       ║
║                                                                ║
║ RULE: Always use === (strict equality) by default!             ║
╚════════════════════════════════════════════════════════════════╝
`);
