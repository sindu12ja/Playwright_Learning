// ============================================
// JavaScript Naming Conventions - Different Cases
// ============================================

// ============================================
// 1. camelCase (most common in JS for variables/functions)
// ============================================
// Rule: Start with lowercase, each new word capitalized
const firstName = "John";
const lastName = "Doe";
const getUserData = function() {};
const calculateTotalPrice = function() {};
const userProfileData = { name: "Alice", age: 30 };
const isValidEmail = true;
const hasUserLoggedIn = false;

console.log("=== camelCase ===");
console.log(firstName);      // "John"
console.log(getUserData);    // [Function: getUserData]

// ============================================
// 2. PascalCase (for classes and constructors)
// ============================================
// Rule: Start with uppercase, each new word capitalized
class UserProfile {}
class ProductCart {}
class ApiClient {}
function Database() {}
const UserController = function() {};
const ShoppingCart = {};

console.log("\n=== PascalCase ===");
console.log(UserProfile);      // [class UserProfile]
console.log(ProductCart);      // [class ProductCart]

// ============================================
// 3. snake_case (sometimes used in JS, common in other languages)
// ============================================
// Rule: Lowercase with underscores between words
const user_first_name = "John";
const user_last_name = "Doe";
const get_user_profile = function() {};
const calculate_total_amount = function() {};
const user_is_active = true;
const database_connection_string = "server://localhost";

console.log("\n=== snake_case ===");
console.log(user_first_name);           // "John"
console.log(calculate_total_amount);    // [Function: calculate_total_amount]

// ============================================
// 4. UPPER_SNAKE_CASE (for constants)
// ============================================
// Rule: Uppercase with underscores between words
const MAX_LOGIN_ATTEMPTS = 5;
const DEFAULT_TIMEOUT = 30000;
const API_BASE_URL = "https://api.example.com";
const DATABASE_HOST = "localhost";
const ALLOWED_USER_ROLES = ["admin", "user", "guest"];
const PAYMENT_METHODS = { CREDIT_CARD: 1, PAYPAL: 2, BANK: 3 };

console.log("\n=== UPPER_SNAKE_CASE ===");
console.log(MAX_LOGIN_ATTEMPTS);       // 5
console.log(API_BASE_URL);             // "https://api.example.com"

// ============================================
// 5. SCREAMING_CAMEL_CASE (rare, mixing styles)
// ============================================
// Rule: Uppercase first letter, camelCase for rest
const MAXLoginAttempts = 5;
const APIBaseURL = "https://api.example.com";
const HTTPSProtocol = "https";
const XMLParser = {};

console.log("\n=== SCREAMING_CAMEL_CASE ===");
console.log(MAXLoginAttempts);         // 5
console.log(APIBaseURL);               // "https://api.example.com"

// ============================================
// 6. kebab-case (NOT VALID for variables, but valid in object keys)
// ============================================
// Rule: Lowercase with hyphens between words
// Note: Cannot be used for variable names, only object properties/keys

// Invalid: const my-variable = "invalid";

// Valid in object keys:
const userConfig = {
    "first-name": "John",
    "last-name": "Doe",
    "user-id": 123,
    "is-active": true,
    "max-login-attempts": 5
};

console.log("\n=== kebab-case (object keys) ===");
console.log(userConfig["first-name"]);     // "John"
console.log(userConfig["max-login-attempts"]); // 5

// Valid in HTML attributes (used in Vue, React, etc.)
const htmlAttributes = `
    <div data-first-name="John" data-user-id="123"></div>
`;

// ============================================
// 7. dot.notation (NOT VALID for variable names)
// ============================================
// Rule: Words separated by dots
// Note: Only valid for property access, not variable declarations

const config = {
    user: {
        profile: {
            firstName: "John",
            lastName: "Doe"
        }
    },
    database: {
        host: "localhost",
        port: 5432
    }
};

console.log("\n=== dot.notation (property access) ===");
console.log(config.user.profile.firstName);    // "John"
console.log(config.database.host);             // "localhost"

// ============================================
// 8. Hungarian Notation (old style, now discouraged)
// ============================================
// Rule: Prefix with type information
const strUserName = "John";        // str = string
const intAge = 30;                 // int = integer
const boolIsActive = true;         // bool = boolean
const arrUserIds = [1, 2, 3];      // arr = array
const objUserData = { name: "John" }; // obj = object
const fnCalculate = function() {}; // fn = function

console.log("\n=== Hungarian Notation (discouraged) ===");
console.log(strUserName);          // "John"
console.log(intAge);               // 30

// ============================================
// 9. Private/Protected Convention (underscore prefix)
// ============================================
// Rule: Single or double underscore prefix indicates private/internal
const _privateVariable = "private";
const __internalValue = "internal";
const _calculateInternally = function() {};
const __initializeSystem = function() {};

class MyClass {
    _privateField = "private";
    __protectedField = "protected";
    
    _privateMethod() {
        return "private method";
    }
}

console.log("\n=== Private Convention ===");
console.log(_privateVariable);     // "private"

// ============================================
// 10. jQuery/Library Convention (dollar prefix)
// ============================================
// Rule: $ prefix indicates jQuery or similar
const $element = document.getElementById("my-element");
const $userForm = document.querySelector("form");
const $buttons = document.querySelectorAll("button");

console.log("\n=== Dollar Prefix Convention ===");
console.log(typeof $element);      // "object" or "undefined"

// ============================================
// BEST PRACTICES SUMMARY
// ============================================

console.log("\n=== BEST PRACTICES ===");
console.log(`
✅ USE:
  • camelCase for variables, functions, methods
  • PascalCase for classes, constructors, components
  • UPPER_SNAKE_CASE for constants
  • snake_case rarely in JS (more common in Python/Ruby)
  • kebab-case for HTML attributes and CSS classes
  • underscore prefix for private/internal methods

❌ AVOID:
  • Hungarian Notation (type prefixes like str, int)
  • Mixing multiple naming conventions in one codebase
  • Single letter variables (except i, j for loops)
  • Overly abbreviated names
  • Inconsistent capitalization
`);

// ============================================
// REAL-WORLD EXAMPLES
// ============================================

// Good code with consistent naming
class UserRepository {
    constructor(database) {
        this.db = database;
        this._cache = new Map();
    }
    
    async getUserById(userId) {
        const cachedUser = this._getFromCache(userId);
        if (cachedUser) return cachedUser;
        
        const userData = await this.db.query(`SELECT * FROM users WHERE id = ${userId}`);
        return userData;
    }
    
    _getFromCache(userId) {
        return this._cache.get(userId) || null;
    }
}

// Constants and configuration
const MAX_RETRY_ATTEMPTS = 3;
const DEFAULT_PAGE_SIZE = 20;
const API_TIMEOUT = 30000;

// Event handlers (often prefixed with "on")
const onUserLogin = (userData) => console.log("User logged in:", userData);
const onFormSubmit = (formData) => console.log("Form submitted:", formData);
const onButtonClick = (event) => console.log("Button clicked:", event);

console.log("\n✅ All naming convention examples executed successfully!");
