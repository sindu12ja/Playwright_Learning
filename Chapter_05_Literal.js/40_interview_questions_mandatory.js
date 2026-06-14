/**
 * INTERVIEW QUESTIONS - == vs === (MANDATORY)
 * Common questions asked in JavaScript interviews
 * Must know answers for getting hired!
 */

// ============================================================================
// QUESTION 1: What's the difference between == and ===?
// ============================================================================

console.log("=== QUESTION 1: Difference between == and === ===\n");

const q1 = `
ANSWER:
--------
== (Loose Equality):
• Compares values after TYPE COERCION
• Tries to convert both operands to same type
• Can lead to unexpected results
• Example: 5 == '5' returns TRUE

=== (Strict Equality):
• Compares values WITHOUT type conversion
• Both TYPE and VALUE must be exactly same
• Safer and more predictable
• Example: 5 === '5' returns FALSE
`;

console.log(q1);

// ============================================================================
// QUESTION 2: Why should we prefer === over ==?
// ============================================================================

console.log("\n=== QUESTION 2: Why prefer === over ==? ===\n");

const q2 = `
ANSWER:
--------
1. PREDICTABILITY - No hidden type conversions
2. PERFORMANCE - === is slightly faster (no conversion)
3. READABILITY - Code intent is clear
4. PREVENTS BUGS - Unexpected type coercion can cause bugs
5. BEST PRACTICE - Modern JS and linters recommend it

Example of bug with ==:
const status = "0";
if (status == false) { // TRUE - unexpected!
    console.log("Status is false");
}

Better with ===:
if (status === false) { // FALSE - correct!
    console.log("Status is false");
}
`;

console.log(q2);

// ============================================================================
// QUESTION 3: What happens with == and different types?
// ============================================================================

console.log("\n=== QUESTION 3: Type coercion with == ===\n");

console.log("5 == '5':", 5 == '5');                    // true
console.log("true == 1:", true == 1);                  // true
console.log("false == 0:", false == 0);                // true
console.log("null == undefined:", null == undefined);  // true (special case)
console.log("'0' == false:", '0' == false);            // true
console.log("[] == '':", [] == '');                    // true
console.log("[] == false:", [] == false);              // true

const q3 = `
ANSWER:
--------
JavaScript performs automatic type coercion:
• '5' → 5 (string to number)
• true → 1 (boolean to number)
• false → 0 (boolean to number)
• [] → '' (array to empty string)
• null == undefined (special case in JS)

This is UNPREDICTABLE and DANGEROUS!
`;

console.log(q3);

// ============================================================================
// QUESTION 4: What will be the output? (Tricky Question)
// ============================================================================

console.log("\n=== QUESTION 4: Tricky output question ===\n");

console.log("QUESTION: What's the output?");
console.log("--------");
console.log("'' == false:", '' == false);           // true
console.log("'' === false:", '' === false);         // false
console.log("'0' == false:", '0' == false);         // true
console.log("'0' === false:", '0' === false);       // false
console.log("null == 0:", null == 0);               // false
console.log("undefined == 0:", undefined == 0);     // false
console.log("NaN == NaN:", NaN == NaN);             // false (NaN special case)
console.log("NaN === NaN:", NaN === NaN);           // false (NaN special case)

const q4 = `
ANSWER:
--------
These outputs show why == is dangerous:
• '' == false is TRUE (but '' === false is FALSE)
• '0' == false is TRUE (but '0' === false is FALSE)
• null == 0 is FALSE (different from == false)
• undefined == 0 is FALSE
• NaN == NaN is FALSE (NaN is special - never equals anything)

KEY POINT: Unpredictable results with == make it error-prone!
`;

console.log(q4);

// ============================================================================
// QUESTION 5: When would you use == instead of ===?
// ============================================================================

console.log("\n=== QUESTION 5: When to use == over ===? ===\n");

const q5 = `
ANSWER:
--------
ALMOST NEVER! But there are rare cases:

1. Checking null OR undefined:
   if (value == null) { ... }  // Covers both null and undefined
   Instead of: if (value === null || value === undefined) { ... }
   
2. Legacy code compatibility
   
3. Comparing with potentially coerced values (not recommended)

BEST PRACTICE: Use === 99.9% of the time!
Linters like ESLint will warn you if you use ==
`;

console.log(q5);

// ============================================================================
// QUESTION 6: What is type coercion?
// ============================================================================

console.log("\n=== QUESTION 6: What is type coercion? ===\n");

const q6 = `
ANSWER:
--------
Type coercion is automatic conversion of one data type to another.

Implicit Coercion (automatic):
• Happens when you use == operator
• JavaScript tries to convert operands to same type
• Example: '5' == 5 → '5' converts to 5 → TRUE

Explicit Coercion (manual):
• You manually convert types
• Example: Number('5') === 5 → TRUE

With ==: JavaScript does implicit coercion automatically
With ===: No coercion happens - types must already match

RULE: Avoid implicit coercion (use ===), use explicit when needed
`;

console.log(q6);

// ============================================================================
// QUESTION 7: What is the difference between == and != ?
// ============================================================================

console.log("\n=== QUESTION 7: Difference between == and != ===\n");

console.log("5 == '5':", 5 == '5');      // true (loose equality)
console.log("5 != '5':", 5 != '5');      // false (loose inequality)
console.log("5 === '5':", 5 === '5');    // false (strict equality)
console.log("5 !== '5':", 5 !== '5');    // true (strict inequality)

const q7 = `
ANSWER:
--------
!= and == are loosely paired (with type coercion)
!== and === are strictly paired (no type coercion)

== : Loose equality (with type coercion)
!= : Loose inequality (with type coercion)

=== : Strict equality (NO type coercion)
!== : Strict inequality (NO type coercion)

RULE: Use === and !== always. Avoid == and !=
`;

console.log(q7);

// ============================================================================
// QUESTION 8: Why does NaN == NaN return false?
// ============================================================================

console.log("\n=== QUESTION 8: Why NaN == NaN is false? ===\n");

console.log("NaN == NaN:", NaN == NaN);        // false
console.log("NaN === NaN:", NaN === NaN);      // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));  // true

const q8 = `
ANSWER:
--------
NaN (Not-a-Number) is a special IEEE 754 value.

According to IEEE 754 standard:
• NaN is NOT equal to anything, including itself
• NaN == NaN returns FALSE
• NaN === NaN returns FALSE

This is by design! NaN represents "undefined/invalid number"

CORRECT WAY to check for NaN:
• Number.isNaN(value) - Recommended (strict check)
• isNaN(value) - Not recommended (does type coercion)
• value !== value - Only NaN fails this check (unusual)

Example:
const result = 0 / 0;  // NaN
Number.isNaN(result);  // true
result === NaN;        // false (wrong way)
`;

console.log(q8);

// ============================================================================
// QUESTION 9: Code output question (Mixed operators)
// ============================================================================

console.log("\n=== QUESTION 9: What will be the output? ===\n");

console.log("QUESTION: Predict the output");
console.log("--------");

const testCases = [
  { code: "console.log(0 == false);", answer: "true" },
  { code: "console.log(0 === false);", answer: "false" },
  { code: "console.log(1 == true);", answer: "true" },
  { code: "console.log(1 === true);", answer: "false" },
  { code: "console.log('' == 0);", answer: "true" },
  { code: "console.log('' === 0);", answer: "false" },
  { code: "console.log(null == undefined);", answer: "true" },
  { code: "console.log(null === undefined);", answer: "false" },
];

testCases.forEach((test, i) => {
  console.log(`${i + 1}. ${test.code} → ${test.answer}`);
});

// ============================================================================
// QUESTION 10: Best practices - Code review question
// ============================================================================

console.log("\n\n=== QUESTION 10: Code Review - Which is better? ===\n");

const q10 = `
QUESTION: Review this code and suggest improvement

CODE 1 (Wrong):
--------------
const age = document.querySelector('input').value; // '25' (string)
if (age == 25) {
    console.log("Age is 25");
}

CODE 2 (Better):
--------------
const age = Number(document.querySelector('input').value);
if (age === 25) {
    console.log("Age is 25");
}

ANSWER:
-------
CODE 2 is BETTER because:
1. Explicit type conversion - clear intent
2. Uses === - predictable comparison
3. No implicit type coercion
4. Easier to debug
5. Follows best practices

KEY LESSON: Convert types explicitly, then use ===
`;

console.log(q10);

// ============================================================================
// INTERVIEW TIPS
// ============================================================================

console.log("\n\n=== INTERVIEW TIPS ===\n");

const tips = `
📌 HOW TO ANSWER IN INTERVIEW:

1. SHORT ANSWER FIRST (15 seconds):
   "=== is strict equality without type conversion.
    == is loose equality with type conversion.
    Use === by default as it's safer."

2. LONGER EXPLANATION (30 seconds):
   • Explain type coercion concept
   • Give 1-2 examples
   • Mention best practices

3. CODE EXAMPLE (if asked):
   Show difference with: 5 == '5' vs 5 === '5'

4. WHY IT MATTERS:
   • Prevents bugs
   • Better performance
   • Industry standard

5. BONUS POINTS:
   • Mention linters enforce ===
   • Talk about implicit vs explicit coercion
   • Show you've thought about this
`;

console.log(tips);

// ============================================================================
// PRACTICE SCENARIOS
// ============================================================================

console.log("\n=== PRACTICE SCENARIOS ===\n");

const scenarios = `
SCENARIO 1: Form validation
Q: How would you compare form input (string) to a number?
A: Convert first: Number(input) === expectedValue

SCENARIO 2: Null checking
Q: How to check if variable is null or undefined?
A: Use: value == null (works for both) OR value === null || value === undefined

SCENARIO 3: Boolean comparison
Q: How to check if value is true?
A: Use: value === true (not value == true)

SCENARIO 4: Debugging
Q: Why is if(userRole == 0) executing unexpectedly?
A: Check type coercion. Use === instead

SCENARIO 5: Code review
Q: You see == in code, what would you suggest?
A: Replace with === and add type conversion if needed
`;

console.log(scenarios);

// ============================================================================
// FINAL CHECKLIST
// ============================================================================

console.log("\n\n=== INTERVIEW CHECKLIST ===\n");

const checklist = `
✅ MUST KNOW:
□ Difference between == and ===
□ Type coercion concept
□ Why === is better
□ When == is dangerous
□ NaN special case
□ null vs undefined comparison

✅ NICE TO HAVE:
□ Performance difference
□ Linter recommendations (ESLint)
□ Real-world examples
□ Common bugs caused by ==

✅ PRACTICE:
□ Can explain with examples
□ Can write correct code
□ Can review code and suggest fixes
□ Can handle follow-up questions
`;

console.log(checklist);
