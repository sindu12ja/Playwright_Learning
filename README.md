# Playwright Learning Repository

A comprehensive learning resource for Playwright automation testing, JavaScript fundamentals, and development tools. This repository contains well-organized learning materials, code examples, and keyboard shortcuts reference.

## 📚 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Content Breakdown](#content-breakdown)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

---

## 🎯 Overview

This repository is designed for developers learning:
- **Playwright Testing Framework** - End-to-end automation testing
- **JavaScript Fundamentals** - Core concepts and best practices
- **Code Naming Conventions** - Identifier rules and naming standards
- **Development Tools** - VS Code keyboard shortcuts for productivity

Whether you're a beginner starting with automation testing or enhancing your JavaScript skills, you'll find practical examples and comprehensive documentation here.

---

## 📂 Repository Structure

```
playwright_learning/
├── chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_Verify_Setup.js
│   └── 04_HotCode.js
│
├── chapter_02_Javascript_concepts/
│   ├── 05_JS_Basics.js
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Part2.js
│   └── 08_Comments.js
│
├── chapter_03_Identifier_Literals/
│   ├── VS_Code_keyboard_shortcut_windows.md
│   ├── VS_Code_keyboard_shortcut_mac.md
│   └── VS_Keyboard_Shortcuts.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git** for cloning the repository
- **VS Code** (optional, for shortcuts reference)

### Clone the Repository

```bash
git clone https://github.com/sindu12ja/Playwright_Learning.git
cd playwright_learning
```

### Install Dependencies

```bash
npm install
```

---

## 📖 Content Breakdown

### Chapter 01: Basics
Learn the fundamentals of Playwright and JavaScript setup.

| File | Description | Topics |
|------|-------------|--------|
| `01_Basics.js` | Introduction to Playwright basics | Setup, Installation |
| `02_JS.js` | JavaScript fundamentals | Variables, Types, Functions |
| `03_JS_Verify_Setup.js` | Verify your development environment | Setup verification |
| `04_HotCode.js` | Hot reload testing setup | Testing framework configuration |

**Key Concepts:**
- Playwright installation and setup
- Browser automation basics
- JavaScript syntax fundamentals
- Testing framework configuration

---

### Chapter 02: JavaScript Concepts
Deep dive into JavaScript fundamentals and best practices.

| File | Lines | Description |
|------|-------|-------------|
| `05_JS_Basics.js` | 2 | Core JavaScript concepts |
| `06_Identifier_Rules.js` | 241 | Valid/Invalid identifier rules with 50+ examples |
| `07_Identifier_Part2.js` | 231 | **10 Naming Conventions**: camelCase, PascalCase, snake_case, UPPER_SNAKE_CASE, kebab-case, Hungarian Notation, Private Convention, jQuery Convention, etc. |
| `08_Comments.js` | 0 | Comment best practices and documentation |

**What You'll Learn:**
- ✅ Valid identifier naming rules
- ✅ Allowed vs disallowed characters
- ✅ Unicode character support
- ✅ 10+ different naming conventions
- ✅ Best practices for code readability
- ✅ Real-world examples for each convention

**Example: Naming Conventions Covered**
```javascript
// camelCase (variables, functions)
const getUserData = () => {};

// PascalCase (classes, components)
class UserProfile {}

// UPPER_SNAKE_CASE (constants)
const MAX_LOGIN_ATTEMPTS = 5;

// snake_case (less common in JS)
const user_profile_data = {};

// kebab-case (HTML attributes, CSS classes)
<div data-user-id="123"></div>

// Hungarian Notation (legacy style)
const strUserName = "John";

// Private Convention (prefix with underscore)
const _privateVariable = "private";

// Dollar Prefix (jQuery convention)
const $element = document.getElementById("id");
```

---

### Chapter 03: Identifier Literals & Tools
Comprehensive keyboard shortcuts reference for maximum productivity.

#### VS Code Shortcuts - Windows
- **File**: `VS_Code_keyboard_shortcut_windows.md`
- **Lines**: 345
- **Shortcuts**: 140+
- **Format**: Organized markdown with quick reference table
- **Features**:
  - 74 Most Used Shortcuts in Quick Reference Table
  - 12+ Detailed Categories
  - Command IDs for all shortcuts
  - Tips and tricks for power users

**Categories Covered:**
1. File Operations (10 shortcuts)
2. Editing (33 shortcuts)
3. Navigation & Search (16 shortcuts)
4. Refactoring & Code Actions (6 shortcuts)
5. Debugging (11 shortcuts)
6. View & Layout (15 shortcuts)
7. Window Management (10 shortcuts)
8. Terminal (9 shortcuts)
9. Git / Source Control (5 shortcuts)
10. Multi-Cursor & Selection (12 shortcuts)
11. Intellisense & Code Completion (7 shortcuts)
12. Tips & Tricks and Resources

#### VS Code Shortcuts - macOS
- **File**: `VS_Code_keyboard_shortcut_mac.md`
- **Lines**: 346
- **Shortcuts**: 140+
- **Features**:
  - Platform-specific macOS shortcuts
  - Cmd instead of Ctrl
  - Option instead of Alt
  - All other shortcuts maintained

**Key Differences (Mac vs Windows):**
| Action | Windows | macOS |
|--------|---------|-------|
| Save | `Ctrl+S` | `Cmd+S` |
| Command Palette | `Ctrl+Shift+P` | `Shift+Cmd+P` |
| Comment Line | `Ctrl+/` | `Cmd+/` |
| Format Document | `Shift+Alt+F` | `Shift+Option+F` |
| Go to Definition | `F12` | `F12` |
| Peek Definition | `Alt+F12` | `Option+F12` |

#### VS Studio Keyboard Shortcuts
- **File**: `VS_Keyboard_Shortcuts.js`
- **Format**: JavaScript with tabular comments
- **Content**: 70+ Most Used Visual Studio shortcuts
- **Categories**: 9+ organized sections

---

## 💻 Usage

### Running JavaScript Files

```bash
# Run any JavaScript file
node chapter_02_Javascript_concepts/07_Identifier_Part2.js

# Output:
# ✅ All naming convention examples executed successfully!
```

### Reading Documentation

```bash
# View VS Code shortcuts for Windows
cat chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_windows.md

# View VS Code shortcuts for macOS
cat chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_mac.md
```

### Learning Flow

**Recommended Learning Sequence:**

1. **Start with Chapter 01: Basics**
   - Understand Playwright fundamentals
   - Verify your development environment

2. **Move to Chapter 02: JavaScript Concepts**
   - Learn identifier rules (file 06)
   - Master naming conventions (file 07)
   - Understand best practices

3. **Reference Chapter 03: Tools**
   - Use VS Code shortcuts to speed up development
   - Bookmark the keyboard shortcuts for quick lookup

---

## 🔑 Key Takeaways

### Naming Conventions (Chapter 02)

This repository covers **10+ different naming conventions**:

1. **camelCase** - For variables and functions
   ```javascript
   const firstName = "John";
   const getUserData = () => {};
   ```

2. **PascalCase** - For classes and components
   ```javascript
   class UserProfile {}
   const ShoppingCart = {};
   ```

3. **snake_case** - Lowercase with underscores
   ```javascript
   const user_profile_data = {};
   ```

4. **UPPER_SNAKE_CASE** - For constants
   ```javascript
   const MAX_LOGIN_ATTEMPTS = 5;
   const API_BASE_URL = "https://api.example.com";
   ```

5. **SCREAMING_CAMEL_CASE** - Rare mix style
   ```javascript
   const MAXLoginAttempts = 5;
   ```

6. **kebab-case** - For HTML attributes
   ```html
   <div data-user-id="123"></div>
   ```

7. **Hungarian Notation** - Type prefix (discouraged)
   ```javascript
   const strUserName = "John";
   const intAge = 30;
   ```

8. **Private Convention** - Underscore prefix
   ```javascript
   const _privateVariable = "private";
   ```

9. **jQuery Convention** - Dollar prefix
   ```javascript
   const $element = document.getElementById("id");
   ```

10. **dot.notation** - Property access
    ```javascript
    config.user.profile.firstName
    ```

---

## 🎓 Best Practices

### Identifier Rules
- ✅ Start with letter, underscore, or dollar sign
- ✅ Can contain numbers (not at start)
- ✅ Supports Unicode characters
- ✅ Case-sensitive
- ❌ Cannot use reserved keywords
- ❌ Cannot start with numbers
- ❌ Cannot contain special characters (except $ and _)

### Naming Best Practices
- Use **camelCase** for variables and functions
- Use **PascalCase** for classes and constructors
- Use **UPPER_SNAKE_CASE** for constants
- Avoid single-letter variables (except loops: i, j)
- Use descriptive, meaningful names
- Be consistent throughout your codebase

### Code Quality
- Add comments for complex logic
- Use meaningful variable names
- Follow consistent naming conventions
- Keep functions small and focused
- Document your code with JSDoc comments

---

## 📚 Resources

### Official Documentation
- **Playwright Docs**: https://playwright.dev
- **JavaScript MDN**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **VS Code Docs**: https://code.visualstudio.com/docs
- **Node.js Docs**: https://nodejs.org/docs

### Keyboard Shortcuts
- **VS Code Windows Shortcuts**: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- **VS Code macOS Shortcuts**: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
- **VS Code Online Reference**: https://code.visualstudio.com/docs/getstarted/keybindings

### Learning Resources
- **Playwright Tutorial**: https://playwright.dev/docs/intro
- **JavaScript Basics**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- **Naming Conventions**: https://google.github.io/styleguide/jsguide.html

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines
- Ensure code follows existing style conventions
- Add comments for complex logic
- Update README if adding new content
- Test your changes before submitting PR

---

## 📝 File Statistics

| File | Type | Lines | Purpose |
|------|------|-------|---------|
| `04_HotCode.js` | JavaScript | 10 | Testing setup |
| `05_JS_Basics.js` | JavaScript | 2 | JS fundamentals |
| `06_Identifier_Rules.js` | JavaScript | 241 | Identifier rules with 50+ examples |
| `07_Identifier_Part2.js` | JavaScript | 231 | 10 naming conventions |
| `08_Comments.js` | JavaScript | 0 | Comment practices |
| `VS_Code_keyboard_shortcut_windows.md` | Markdown | 345 | 140+ Windows shortcuts |
| `VS_Code_keyboard_shortcut_mac.md` | Markdown | 346 | 140+ macOS shortcuts |
| `VS_Keyboard_Shortcuts.js` | JavaScript | 550+ | Visual Studio shortcuts |
| **TOTAL** | | **1,765+** | Complete learning resource |

---

## 🎯 Quick Start Examples

### Check Identifier Rules
```bash
node chapter_02_Javascript_concepts/06_Identifier_Rules.js
```

### Learn Naming Conventions
```bash
node chapter_02_Javascript_concepts/07_Identifier_Part2.js
```

**Output includes:**
- 10 different naming convention types
- Real-world usage examples
- Best practices summary
- Practical implementation patterns

---

## 📱 Usage Tips

### For Windows Developers
- Reference: `chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_windows.md`
- Uses `Ctrl`, `Shift`, `Alt` modifiers
- 140+ shortcuts organized by category
- Quick lookup tables included

### For macOS Developers
- Reference: `chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_mac.md`
- Uses `Cmd`, `Shift`, `Option` modifiers
- Same 140+ shortcuts adapted for Mac
- Easy Mac-specific navigation

### Most Used Shortcuts

| Action | Windows | macOS | Benefit |
|--------|---------|-------|---------|
| Save File | `Ctrl+S` | `Cmd+S` | Never lose work |
| Find | `Ctrl+F` | `Cmd+F` | Quick search |
| Format | `Shift+Alt+F` | `Shift+Option+F` | Code cleanup |
| Go to Definition | `F12` | `F12` | Navigate code |
| Command Palette | `Ctrl+Shift+P` | `Shift+Cmd+P` | Access any command |
| Comment | `Ctrl+/` | `Cmd+/` | Quick comments |

---

## 📊 Repository Stats

- **Languages**: JavaScript, Markdown
- **Total Files**: 8+
- **Total Lines of Code**: 1,765+
- **Chapters**: 3
- **Sections**: 12+
- **Code Examples**: 50+
- **Keyboard Shortcuts**: 280+
- **Naming Conventions**: 10+

---

## 🔄 Recent Updates

### Latest Commit (June 8, 2026)
- Added JavaScript learning materials
- Added comprehensive naming conventions guide
- Added VS Code shortcuts for Windows (140+ shortcuts)
- Added VS Code shortcuts for macOS (140+ shortcuts)
- Added Visual Studio keyboard shortcuts
- Organized content into chapters

---

## ❓ FAQ

**Q: Which JavaScript version is this based on?**
A: Modern JavaScript (ES6+) with examples covering current best practices.

**Q: Can I use these shortcuts in other IDEs?**
A: Some shortcuts are VS Code specific. Check your IDE's documentation for equivalents.

**Q: Are the naming conventions applicable to other languages?**
A: Yes! Most conventions apply to Python, Java, C#, and other languages with variations.

**Q: How do I contribute new examples?**
A: Fork the repository, add your examples, and submit a pull request.

---

## 📧 Support

For questions or issues:
1. Check existing issues: [GitHub Issues](https://github.com/sindu12ja/Playwright_Learning/issues)
2. Create a new issue with detailed description
3. Include relevant code snippets and error messages

---

## 📄 License

This repository is open source and available under the MIT License. See LICENSE file for details.

---

## 🙏 Acknowledgments

- Playwright Official Documentation
- MDN JavaScript Reference
- VS Code Documentation
- JavaScript Community Best Practices

---

## 🔗 Quick Links

| Link | Purpose |
|------|---------|
| [Repository](https://github.com/sindu12ja/Playwright_Learning) | Main repository |
| [Issues](https://github.com/sindu12ja/Playwright_Learning/issues) | Report bugs or suggest features |
| [Commits](https://github.com/sindu12ja/Playwright_Learning/commits/master) | View commit history |
| [Releases](https://github.com/sindu12ja/Playwright_Learning/releases) | Download specific versions |

---

## ⭐ Show Your Support

If you found this repository helpful:
- ⭐ Star the repository
- 🔖 Bookmark for future reference
- 📤 Share with fellow developers
- 🐛 Report issues or suggest improvements

---

**Last Updated**: June 8, 2026
**Repository**: https://github.com/sindu12ja/Playwright_Learning
**Version**: 1.0.0

Happy Learning! 🚀
