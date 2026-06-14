/**
 * String Types in JavaScript
 * Difference between Backticks, Single Quotes, and Double Quotes
 */

// ============================================================================
// 1. SINGLE QUOTES (')
// ============================================================================
const singleQuote = 'Hello World';
console.log("Single Quote:", singleQuote);
console.log("Cannot interpolate variables: 'Hello ' + name = 'Hello ' + 'John'");

// ============================================================================
// 2. DOUBLE QUOTES (")
// ============================================================================
const doubleQuote = "Hello World";
console.log("Double Quote:", doubleQuote);
console.log("Cannot interpolate variables: \"Hello \" + name = \"Hello \" + \"John\"");

// ============================================================================
// 3. BACKTICKS (`) - TEMPLATE LITERALS (ES6)
// ============================================================================
const backtick = `Hello World`;
console.log("Backtick:", backtick);

// ============================================================================
// EXAMPLE: SHOWING KEY DIFFERENCES
// ============================================================================

const name = "John";
const age = 30;

console.log("\n=== EXAMPLE WITH VARIABLES ===\n");

// Single Quote - NO interpolation
const single = 'My name is ' + name + ' and I am ' + age + ' years old.';
console.log("Single Quote: " + single);

// Double Quote - NO interpolation (same as single)
const double = "My name is " + name + " and I am " + age + " years old.";
console.log("Double Quote: " + double);

// Backtick - WITH interpolation using ${} - BEST FOR READABILITY
const template = `My name is ${name} and I am ${age} years old.`;
console.log("Backtick: " + template);

// ============================================================================
// KEY DIFFERENCES TABLE
// ============================================================================

console.log(`
┌────────────┬──────────────┬─────────────────────┬──────────────────┐
│ Type       │ Symbol       │ Interpolation       │ Multi-line       │
├────────────┼──────────────┼─────────────────────┼──────────────────┤
│ Single     │ '...'        │ NO (use +)          │ NO               │
│ Double     │ "..."        │ NO (use +)          │ NO               │
│ Backtick   │ \`...\`      │ YES (\${var})      │ YES              │
└────────────┴──────────────┴─────────────────────┴──────────────────┘
`);

// Backtick example: Multi-line strings
const multiLine = `
This is a
multi-line string
using backticks.
`;
console.log("Multi-line Backtick:\n" + multiLine);
