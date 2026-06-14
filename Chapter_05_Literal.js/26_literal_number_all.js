/**
 * JavaScript Number Types and Literals
 * 
 * JavaScript has several ways to represent numbers and different number formats.
 * All numbers in JavaScript are of type "number" (except BigInt which is a separate type).
 * Internally, JavaScript uses 64-bit floating-point format (IEEE 754 standard).
 */

// ============================================================================
// 1. DECIMAL NUMBERS (Base 10)
// ============================================================================

const decimal1 = 42;              // Integer literal
const decimal2 = 3.14;            // Floating-point literal
const decimal3 = -100;            // Negative number
const decimal4 = 0;               // Zero
const decimal5 = -0;              // Negative zero (technically different but equals positive zero)
const decimal6 = 123.456789;      // Multiple decimal places
const decimal7 = 1e3;             // Scientific notation: 1 * 10^3 = 1000
const decimal8 = 1e-3;            // Scientific notation: 1 * 10^-3 = 0.001
const decimal9 = 2.5e2;           // Scientific notation: 2.5 * 10^2 = 250

console.log("=== DECIMAL NUMBERS ===");
console.log("decimal1:", decimal1, typeof decimal1);
console.log("decimal2:", decimal2, typeof decimal2);
console.log("decimal3:", decimal3, typeof decimal3);
console.log("decimal4:", decimal4, typeof decimal4);
console.log("decimal5:", decimal5, typeof decimal5);
console.log("decimal7 (1e3):", decimal7);
console.log("decimal8 (1e-3):", decimal8);
console.log("decimal9 (2.5e2):", decimal9);
console.log("0 === -0:", 0 === -0);  // True in JavaScript

// ============================================================================
// 2. BINARY NUMBERS (Base 2)
// ============================================================================
// Binary literals start with 0b or 0B

const binary1 = 0b1010;           // 10 in decimal
const binary2 = 0B11111111;       // 255 in decimal
const binary3 = 0b1;              // 1 in decimal
const binary4 = 0b0;              // 0 in decimal

console.log("\n=== BINARY NUMBERS ===");
console.log("0b1010:", binary1, "(decimal: 10)");
console.log("0B11111111:", binary2, "(decimal: 255)");
console.log("0b1:", binary3, "(decimal: 1)");
console.log("0b0:", binary4, "(decimal: 0)");

// ============================================================================
// 3. OCTAL NUMBERS (Base 8)
// ============================================================================
// Octal literals start with 0o or 0O
// Note: Old syntax with just 0 (0755) still works but is discouraged in strict mode

const octal1 = 0o10;              // 8 in decimal
const octal2 = 0O755;             // 493 in decimal
const octal3 = 0o77;              // 63 in decimal
const octal4 = 0o0;               // 0 in decimal

console.log("\n=== OCTAL NUMBERS ===");
console.log("0o10:", octal1, "(decimal: 8)");
console.log("0O755:", octal2, "(decimal: 493)");
console.log("0o77:", octal3, "(decimal: 63)");
console.log("0o0:", octal4, "(decimal: 0)");

// ============================================================================
// 4. HEXADECIMAL NUMBERS (Base 16)
// ============================================================================
// Hexadecimal literals start with 0x or 0X
// Use digits 0-9 and letters A-F (case insensitive)

const hex1 = 0xFF;                // 255 in decimal
const hex2 = 0x10;                // 16 in decimal
const hex3 = 0xABCDEF;            // 11259375 in decimal
const hex4 = 0xabcdef;            // Same as above (case insensitive)
const hex5 = 0x0;                 // 0 in decimal
const hex6 = 0xDEADBEEF;          // 3735928559 in decimal

console.log("\n=== HEXADECIMAL NUMBERS ===");
console.log("0xFF:", hex1, "(decimal: 255)");
console.log("0x10:", hex2, "(decimal: 16)");
console.log("0xABCDEF:", hex3, "(decimal: 11259375)");
console.log("0xabcdef:", hex4, "(same as above, case insensitive)");
console.log("0x0:", hex5, "(decimal: 0)");
console.log("0xDEADBEEF:", hex6, "(decimal: 3735928559)");

// ============================================================================
// 5. SPECIAL NUMBER VALUES
// ============================================================================

const infinity = Infinity;        // Positive infinity
const negInfinity = -Infinity;    // Negative infinity
const notANumber = NaN;           // Not-a-Number (special value)

console.log("\n=== SPECIAL NUMBER VALUES ===");
console.log("Infinity:", infinity, typeof infinity);
console.log("-Infinity:", negInfinity, typeof negInfinity);
console.log("NaN:", notANumber, typeof notANumber);
console.log("NaN === NaN:", notANumber === notANumber);  // False! NaN is unique
console.log("Number.isNaN(NaN):", Number.isNaN(notANumber));  // True
console.log("isNaN(NaN):", isNaN(notANumber));  // True

// ============================================================================
// 6. NUMBER CONSTANTS
// ============================================================================

console.log("\n=== NUMBER CONSTANTS ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);           // Largest representable number
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);           // Smallest positive number
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);  // 2^53 - 1
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);  // -(2^53 - 1)
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);
console.log("Number.EPSILON:", Number.EPSILON);  // Smallest difference between 1 and next number

// ============================================================================
// 7. BIG INT TYPE (Arbitrary Precision Integers)
// ============================================================================
// BigInt literals end with 'n'
// Used for numbers larger than Number.MAX_SAFE_INTEGER
// Cannot be mixed with regular numbers in operations

const bigint1 = 123n;
const bigint2 = 0xFFFFFFFFFFFFFFFFn;  // Very large hexadecimal
const bigint3 = 9007199254740992n;    // Larger than Number.MAX_SAFE_INTEGER
const bigint4 = BigInt("12345678901234567890");  // Created from string
const bigint5 = -100n;                // Negative BigInt

console.log("\n=== BIG INT NUMBERS ===");
console.log("123n:", bigint1, typeof bigint1);
console.log("0xFFFFFFFFFFFFFFFFn:", bigint2, typeof bigint2);
console.log("9007199254740992n:", bigint3, typeof bigint3);
console.log("BigInt('12345678901234567890'):", bigint4, typeof bigint4);
console.log("-100n:", bigint5, typeof bigint5);

// BigInt operations
console.log("\nBigInt Operations:");
console.log("123n + 456n =", 123n + 456n);
console.log("100n * 2n =", 100n * 2n);
console.log("1000n / 3n =", 1000n / 3n);  // Division rounds toward zero

// ============================================================================
// 8. UNDERSCORES IN NUMERIC LITERALS (ES2021)
// ============================================================================
// Underscores can be used for readability (separators only, no value impact)

const withUnderscores1 = 1_000_000;           // One million
const withUnderscores2 = 0xFF_FF_FF;          // Hexadecimal with underscores
const withUnderscores3 = 0b1111_0000_1111;    // Binary with underscores
const withUnderscores4 = 3.14_15_92;          // Decimal with underscores
const withUnderscores5 = 1_000_000n;          // BigInt with underscores

console.log("\n=== NUMERIC LITERALS WITH UNDERSCORES ===");
console.log("1_000_000:", withUnderscores1);
console.log("0xFF_FF_FF:", withUnderscores2, "(decimal: 16777215)");
console.log("0b1111_0000_1111:", withUnderscores3, "(decimal: 3855)");
console.log("3.14_15_92:", withUnderscores4);
console.log("1_000_000n:", withUnderscores5);

// ============================================================================
// 9. CONVERTING BETWEEN NUMBER FORMATS
// ============================================================================

console.log("\n=== CONVERTING BETWEEN FORMATS ===");

const num = 255;
console.log("Original number:", num);
console.log("toString(2) - Binary:", num.toString(2));      // "11111111"
console.log("toString(8) - Octal:", num.toString(8));       // "377"
console.log("toString(16) - Hexadecimal:", num.toString(16)); // "ff"
console.log("toString(36) - Base36:", num.toString(36));    // "73"

// Parsing from different formats
console.log("\nParsing from different formats:");
console.log("parseInt('1010', 2):", parseInt('1010', 2));     // From binary
console.log("parseInt('10', 8):", parseInt('10', 8));         // From octal
console.log("parseInt('FF', 16):", parseInt('FF', 16));       // From hexadecimal
console.log("parseInt('ABC', 36):", parseInt('ABC', 36));     // From base-36

// ============================================================================
// 10. NUMBER PRECISION AND FLOATING POINT ISSUES
// ============================================================================

console.log("\n=== FLOATING POINT PRECISION ===");
console.log("0.1 + 0.2:", 0.1 + 0.2);                    // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);  // false
console.log("(0.1 + 0.2).toFixed(1):", (0.1 + 0.2).toFixed(1));  // "0.3"

// Check if numbers are safe integers
console.log("\nSafe Integer Checking:");
console.log("Number.isSafeInteger(100):", Number.isSafeInteger(100));
console.log("Number.isSafeInteger(9007199254740992):", Number.isSafeInteger(9007199254740992));  // false
console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));  // true

// ============================================================================
// 11. NUMBER METHODS
// ============================================================================

console.log("\n=== NUMBER METHODS ===");

const testNum = 123.456;
console.log("Original:", testNum);
console.log("toFixed(2):", testNum.toFixed(2));           // "123.46"
console.log("toPrecision(5):", testNum.toPrecision(5));   // "123.46"
console.log("toExponential(2):", testNum.toExponential(2)); // "1.23e+2"
console.log("toLocaleString():", testNum.toLocaleString()); // Locale-specific format

// ============================================================================
// 12. TYPE CHECKING FOR NUMBERS
// ============================================================================

console.log("\n=== TYPE CHECKING ===");
console.log("typeof 42:", typeof 42);                      // "number"
console.log("typeof 42n:", typeof 42n);                    // "bigint"
console.log("typeof Infinity:", typeof Infinity);          // "number"
console.log("typeof NaN:", typeof NaN);                    // "number" (misleading!)
console.log("Number.isFinite(100):", Number.isFinite(100));     // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isInteger(100):", Number.isInteger(100));   // true
console.log("Number.isInteger(100.5):", Number.isInteger(100.5)); // false

// ============================================================================
// SUMMARY TABLE
// ============================================================================

console.log("\n=== SUMMARY OF NUMBER TYPES ===");
console.log(`
┌─────────────────────┬──────────────┬─────────────────────────┐
│ Type                │ Syntax       │ Example                 │
├─────────────────────┼──────────────┼─────────────────────────┤
│ Decimal             │ 123, -45.67  │ 42, 3.14                │
│ Binary              │ 0b or 0B     │ 0b1010 (= 10)           │
│ Octal               │ 0o or 0O     │ 0o755 (= 493)           │
│ Hexadecimal         │ 0x or 0X     │ 0xFF (= 255)            │
│ Scientific          │ e or E       │ 1e3 (= 1000)            │
│ Special Values      │ Infinity     │ Infinity, -Infinity, NaN│
│ BigInt              │ n suffix     │ 123n                    │
│ Underscores (sep)   │ _            │ 1_000_000               │
└─────────────────────┴──────────────┴─────────────────────────┘
`);

console.log("All operations completed successfully!");
