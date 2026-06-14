/**
 * EASY WAY TO REMEMBER == vs ===
 * Simple tricks to understand and remember the difference
 */

// ============================================================================
// MEMORY TRICK 1: COUNT THE EQUALS SIGNS
// ============================================================================

console.log("=== MEMORY TRICK: COUNT THE EQUALS ===\n");

console.log("==  (2 equals) = LOOSE = MORE LENIENT = LAZY CHECK");
console.log("    └─ Like a bouncer who's sleepy - lets similar things pass");
console.log("    └─ '5' is similar to 5, so let it pass ✓");

console.log("\n=== (3 equals) = STRICT = STRICT RULES = CAREFUL CHECK");
console.log("    └─ Like a bouncer who's strict - only exact matches pass");
console.log("    └─ '5' is NOT exactly 5, so reject it ✗");

// ============================================================================
// MEMORY TRICK 2: REAL WORLD ANALOGY
// ============================================================================

console.log("\n\n=== REAL WORLD ANALOGY ===\n");

console.log("== is like checking if two people LOOK similar:");
console.log("   A person wearing same-colored shirt = similar ✓");
console.log("   Number 5 and String '5' = look similar ✓");
console.log("   5 == '5' → true (they look the same)");

console.log("\n=== is like checking if two people are IDENTICAL:");
console.log("   Same person, same clothes, same everything = identical ✓");
console.log("   Number 5 IS Number 5 = identical ✓");
console.log("   Number 5 is NOT String '5' = NOT identical ✗");
console.log("   5 === '5' → false (they're not identical)");

// ============================================================================
// MEMORY TRICK 3: TYPE MATTERS OR NOT
// ============================================================================

console.log("\n\n=== DO TYPES MATTER? ===\n");

console.log("== → TYPE DOESN'T MATTER");
console.log("   5 == '5' → true (different types, but same value)");
console.log("   true == 1 → true (different types, but equivalent)");

console.log("\n=== → TYPE MATTERS!");
console.log("   5 === '5' → false (different types!)");
console.log("   true === 1 → false (different types!)");

// ============================================================================
// MEMORY TRICK 4: SIMPLE RULES TO FOLLOW
// ============================================================================

console.log("\n\n=== SIMPLE RULES (EASY TO REMEMBER) ===\n");

console.log("RULE 1: == does MAGIC conversion");
console.log("        It tries to make things match by converting");
console.log("        Example: '5' becomes 5, then they match");

console.log("\nRULE 2: === does NO conversion");
console.log("        If types don't match, it fails");
console.log("        Example: '5' stays '5', 5 stays 5 → NOT equal");

// ============================================================================
// MEMORY TRICK 5: WHICH ONE TO USE (GOLDEN RULE)
// ============================================================================

console.log("\n\n=== GOLDEN RULE ===\n");

console.log("👉 ALWAYS USE === (3 equals) BY DEFAULT");
console.log("   Why? Because it's safer and more predictable");
console.log("   It's like using a lock instead of trusting people");

console.log("\n❌ AVOID == (2 equals) in most cases");
console.log("   Why? Because it does unexpected type conversion");
console.log("   It can lead to confusing bugs");

// ============================================================================
// MEMORY TRICK 6: COMPARISON TABLE (EASY TO READ)
// ============================================================================

console.log("\n\n=== QUICK COMPARISON TABLE ===\n");

const examples = [
  { expr: "5 == '5'", loose: true, strict: false, reason: "String converts to number" },
  { expr: "true == 1", loose: true, strict: false, reason: "Boolean converts to number" },
  { expr: "false == 0", loose: true, strict: false, reason: "Boolean converts to number" },
  { expr: "null == undefined", loose: true, strict: false, reason: "Special case" },
  { expr: "'0' == false", loose: true, strict: false, reason: "String and boolean convert" },
  { expr: "5 == 5", loose: true, strict: true, reason: "Same type and value" },
  { expr: "'5' === '5'", loose: true, strict: true, reason: "Same type and value" },
];

console.log("Expression\t\t== (Loose)\t=== (Strict)\tWhy?");
console.log("─".repeat(80));
examples.forEach(ex => {
  console.log(`${ex.expr.padEnd(20)}\t${String(ex.loose).padEnd(12)}\t${String(ex.strict).padEnd(12)}\t${ex.reason}`);
});

// ============================================================================
// MEMORY TRICK 7: CHEAT SHEET FOR BRAIN
// ============================================================================

console.log("\n\n=== CHEAT SHEET (COPY THIS TO YOUR BRAIN!) ===\n");

const cheatSheet = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃               == vs === CHEAT SHEET                        ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┃
┃                                                            ┃
┃  == (2 equals) = LOOSE EQUALITY                           ┃
┃  • Converts types before comparing                        ┃
┃  • 5 == '5' → TRUE ✓                                      ┃
┃  • Like checking if two things LOOK similar              ┃
┃  • AVOID using - can cause bugs!                         ┃
┃                                                            ┃
┃  === (3 equals) = STRICT EQUALITY                         ┃
┃  • No type conversion                                     ┃
┃  • 5 === '5' → FALSE ✗                                    ┃
┃  • Like checking if two things are IDENTICAL             ┃
┃  • USE THIS - safe and predictable!                      ┃
┃                                                            ┃
┃  ⭐ REMEMBER: More equals = More strict!                   ┃
┃     == = Lazy bouncer (2 checks)                          ┃
┃     === = Strict bouncer (3 checks)                       ┃
┃                                                            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`;

console.log(cheatSheet);

// ============================================================================
// MEMORY TRICK 8: COMMON MISTAKES (LEARN FROM THEM)
// ============================================================================

console.log("\n\n=== COMMON MISTAKES & SOLUTIONS ===\n");

console.log("❌ MISTAKE 1: Using == with form inputs");
console.log("   const age = '25'; // From form (always string)");
console.log("   if (age == 25) { ... } // WRONG - relies on type conversion");

console.log("\n✅ SOLUTION 1: Convert first, then use ===");
console.log("   const age = Number(form.age.value);");
console.log("   if (age === 25) { ... } // RIGHT");

console.log("\n" + "─".repeat(60));

console.log("\n❌ MISTAKE 2: Using == with booleans");
console.log("   if (status == true) { ... } // WRONG");

console.log("\n✅ SOLUTION 2: Use === with booleans");
console.log("   if (status === true) { ... } // RIGHT");

console.log("\n" + "─".repeat(60));

console.log("\n❌ MISTAKE 3: Using == with null/undefined");
console.log("   if (value == null) { ... } // WORKS but confusing");

console.log("\n✅ SOLUTION 3: Be explicit");
console.log("   if (value === null || value === undefined) { ... } // CLEAR");

// ============================================================================
// PRACTICE EXAMPLES
// ============================================================================

console.log("\n\n=== PRACTICE QUESTIONS ===\n");

console.log("What will these return? (Try to guess first!)");
console.log("─".repeat(60));

const questions = [
  { q: "10 == '10'", ans: "true (string converts to number)" },
  { q: "10 === '10'", ans: "false (different types)" },
  { q: "'cat' == 'cat'", ans: "true (same type and value)" },
  { q: "'cat' === 'cat'", ans: "true (same type and value)" },
  { q: "[] == false", ans: "true (array converts)" },
  { q: "[] === false", ans: "false (different types)" },
  { q: "0 == false", ans: "true (0 converts to false)" },
  { q: "0 === false", ans: "false (different types)" },
];

questions.forEach((item, i) => {
  console.log(`${i + 1}. ${item.q.padEnd(25)} → ${item.ans}`);
});

// ============================================================================
// FINAL SUMMARY
// ============================================================================

console.log("\n\n=== FINAL SUMMARY ===\n");

console.log(`
📌 KEY POINTS TO REMEMBER:

1. MORE EQUALS = MORE STRICT
   == (2) = loose, lazy, makes converts
   === (3) = strict, careful, no converts

2. THINK OF TYPES
   == ignores type differences (dangerous!)
   === respects type differences (safe!)

3. GOLDEN RULE
   Always use === unless you have a very good reason not to

4. REAL WORLD
   == = "similar enough?"      (risky)
   === = "exactly the same?"   (safe)

5. MEMORY HELPER
   More = signs = More strict checks!
   == = fewer checks (loose)
   === = more checks (strict)
`);
