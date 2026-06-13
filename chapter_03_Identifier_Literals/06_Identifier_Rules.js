// ============================================
// JavaScript Identifiers - Allowed vs Disallowed
// ============================================

// ============================================
// ✅ ALLOWED IDENTIFIERS
// ============================================

// 1. Starting with lowercase letters
const myVariable = "allowed";
const userName = "John";
const productName = "Laptop";

// 2. Starting with uppercase letters
const MyClass = function() {};
const UserProfile = "profile";
const CONSTANT_VALUE = 100;

// 3. Starting with underscore (_)
const _privateVar = "private";
const __dunder = "dunder";
const ___ = "triple underscore";

// 4. Starting with dollar sign ($)
const $price = 50;
const $userName = "Alice";
const $_temp = "temporary";

// 5. Mixed case (camelCase)
const firstName = "John";
const lastName = "Doe";
const getUserData = function() {};
const isValidUser = true;

// 6. Snake case with underscores
const user_name = "John";
const user_profile_data = {};
const _internal_method = function() {};

// 7. Numbers in identifiers (but NOT at start)
const var1 = "first";
const var2 = "second";
const item123 = "product";
const user2Profile = "profile";

// 8. Unicode characters (letters from other languages)
const 你好 = "Hello in Chinese";
const café = "coffee";
const naïve = "not naive";
const résumé = "resume";
const 名前 = "name in Japanese";
const ñame = "Spanish name";

// 9. Unicode escape sequences
const \u0041pple = "Apple"; // \u0041 = 'A'
const caf\u00E9 = "cafe";   // \u00E9 = 'é'
const \u4F60\u597D = "你好"; // Unicode escape for Chinese characters

// 10. Using $ and _ together
const $_ = "allowed";
const _$ = "allowed";
const $_value = "allowed";
const $__name = "allowed";

// 11. Multiple underscores
const __proto__ = "proto";
const ___init___ = "init";

// 12. Combinations
const myVar_1 = "valid";
const $myObject_1 = "valid";
const _privateField_2 = "valid";

// 13. Object properties (can use reserved words here)
const obj = {
    import: "allowed in object",
    class: "allowed in object",
    function: "allowed here",
    return: "also allowed",
    for: "yes, allowed"
};

// 14. Class private fields (can use reserved words)
class MyClass {
    #private = "private field";
    #import = "reserved word allowed here";
    #class = "reserved word allowed here";
}

// ============================================
// ❌ DISALLOWED IDENTIFIERS
// ============================================

// 1. Starting with numbers (SYNTAX ERROR)
// const 1stVar = "invalid";
// const 2myVar = "invalid";
// const 3_value = "invalid";

// 2. Reserved keywords (SYNTAX ERROR)
// const break = "invalid";
// const case = "invalid";
// const catch = "invalid";
// const class = "invalid";
// const const = "invalid";
// const continue = "invalid";
// const debugger = "invalid";
// const default = "invalid";
// const delete = "invalid";
// const do = "invalid";
// const else = "invalid";
// const export = "invalid";
// const extends = "invalid";
// const false = "invalid";
// const finally = "invalid";
// const for = "invalid";
// const function = "invalid";
// const if = "invalid";
// const import = "invalid";
// const in = "invalid";
// const instanceof = "invalid";
// const new = "invalid";
// const null = "invalid";
// const return = "invalid";
// const super = "invalid";
// const switch = "invalid";
// const this = "invalid";
// const throw = "invalid";
// const true = "invalid";
// const try = "invalid";
// const typeof = "invalid";
// const var = "invalid";
// const void = "invalid";
// const while = "invalid";
// const with = "invalid";
// const yield = "invalid";

// 3. Spaces in identifiers (SYNTAX ERROR)
// const my variable = "invalid";
// const user name = "invalid";
// const my-var = "invalid";

// 4. Hyphens/dashes (SYNTAX ERROR - except in object keys as strings)
// const my-var = "invalid";
// const first-name = "invalid";
// const user-id = "invalid";

// 5. Special characters (except $, _, Unicode) (SYNTAX ERROR)
// const my@var = "invalid";
// const user#name = "invalid";
// const item&product = "invalid";
// const price*quantity = "invalid";
// const my.var = "invalid"; // dot is for property access
// const my/var = "invalid";
// const my\var = "invalid";
// const my!var = "invalid";
// const my?var = "invalid";
// const my:var = "invalid";
// const my;var = "invalid";
// const my,var = "invalid";

// 6. Only special characters (SYNTAX ERROR)
// const @ = "invalid";
// const # = "invalid";
// const ! = "invalid";
// const % = "invalid";

// 7. Dots (used for property access, not variable names) (SYNTAX ERROR)
// const my.variable = "invalid";
// const user.name = "invalid";

// 8. Hyphens (reserved for minus operations) (SYNTAX ERROR)
// const my-variable = "invalid";
// const first-name = "invalid";

// 9. Reserved words in strict mode (SYNTAX ERROR in strict mode)
// 'use strict';
// const let = "invalid in strict mode";
// const static = "invalid in strict mode";
// const yield = "invalid in strict mode";

// 10. Future reserved words (SYNTAX ERROR)
// const enum = "invalid";
// const implements = "invalid";
// const interface = "invalid";
// const package = "invalid";
// const private = "invalid";
// const protected = "invalid";
// const public = "invalid";

// 11. Unicode escape that resolves to reserved word (SYNTAX ERROR)
// const els\u0065 = "invalid"; // \u0065 = 'e', so this becomes "else"

// 12. Escape sequences that don't form valid identifiers (SYNTAX ERROR)
// const \uG123 = "invalid"; // G is not a valid hex digit

// ============================================
// SUMMARY TABLE
// ============================================

/*
ALLOWED PATTERNS:
✅ [a-zA-Z]           - Start with letter
✅ [_]                - Start with underscore
✅ [$]                - Start with dollar sign
✅ [Unicode letter]   - Start with Unicode letters (é, ñ, 中, etc.)
✅ [allowed][a-zA-Z0-9_$Unicode]* - Followed by letters, digits, _, $, Unicode

DISALLOWED PATTERNS:
❌ [0-9]...          - Cannot start with digit
❌ Reserved words    - break, case, class, etc.
❌ Spaces            - Cannot contain spaces
❌ Hyphens/Dashes    - Cannot use - or --
❌ Special chars     - @, #, !, %, &, *, +, =, etc.
❌ Dots              - Used for property access only
❌ Reserved (strict) - let, static, yield (in strict mode)
❌ Future reserved   - enum, implements, interface, etc.
❌ Reserved as key   - Only allowed in object properties/class fields
*/

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Good identifier naming conventions
const userAge = 25;              // camelCase
const USER_ID = 12345;          // UPPER_SNAKE_CASE (constants)
const _internalValue = "hidden"; // _prefix (private convention)
const $jQuery = {};             // $prefix (library convention)

// Valid but unusual
const ___weird___ = true;
const ___ = "triple underscore";
const $$ = "double dollar";

// Examples with Unicode (valid in modern JavaScript)
const prénom = "Jean";          // French: first name
const プロファイル = {};        // Japanese: profile
const מחיר = 100;                // Hebrew: price
const цена = 50;                 // Russian: price

console.log("All identifier examples executed successfully!");
