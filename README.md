# Sauce Labs E-Commerce Automation Framework

A comprehensive Cypress-based test automation framework for Sauce Labs demo application using TypeScript, Cucumber BDD, and Page Object Model.

## Table of Contents
- [Framework Features](#framework-features)
- [Best Practices](#best-practices)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running Tests](#running-tests)
- [Test Scenario Coverage](#test-scenario-coverage)
- [Test Reports](#test-reports)

## Framework Features

### ✅ Core Capabilities
- **BDD with Cucumber** - Readable Gherkin scenarios for business stakeholders
- **Page Object Model** - Maintainable and reusable code structure
- **TypeScript** - Type-safe implementation with IntelliSense support
- **Dynamic Test Data** - Faker.js integration for random data generation
- **Data Validation** - Comprehensive assertions for product names, prices, and totals
- **Cypress Aliases** - Efficient data sharing across test steps

### ✅ Testing Features
- **Random Item Selection** - Tests select 3 random products per execution
- **End-to-End Validation** - Verifies data consistency from cart to checkout
- **Cross-Browser Support** - Chrome, Firefox, Edge, Electron
- **Responsive Testing** - Multiple viewport configurations
- **Environment Configuration** - Support for dev, staging, production

### ✅ Reporting & Debugging
- **HTML Reports** - Detailed Cucumber HTML reports with step-by-step execution
- **Video Recording** - Automatic video capture of test runs
- **Screenshots** - Captured automatically on test failures

## Best Practices

✅ **Separation of Concerns** - Locators, pages, and steps are isolated  
✅ **DRY Principle** - Reusable helper functions and utilities  
✅ **Clear Naming** - Descriptive method and variable names  
✅ **Type Safety** - TypeScript for compile-time error detection  
✅ **Page Object Model** - Centralized page interactions and validations  
✅ **BDD Approach** - Business-readable test scenarios  

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **TypeScript** | Primary programming language |
| **Cypress 14.0.3** | E2E testing framework |
| **Cucumber BDD** | Behavior-driven development |
| **Faker.js 9.6.0** | Random test data generation |
| **Node.js** | Runtime environment |

## Project Structure

```
.
├── cypress
│   ├── fixtures              # Test data files
│   │   ├── checkout.json     # Checkout validation messages
│   │   └── login.json        # User credentials
│   ├── integration           # BDD feature files
│   │   └── checkout.feature  # E-commerce checkout scenario
│   ├── support               # Supporting files
│   │   ├── config
│   │   │   └── urls.json     # Environment URLs
│   │   ├── helper
│   │   │   └── utils.ts      # Utility functions (Faker)
│   │   ├── locators          # Page element locators
│   │   │   ├── cart.locators.ts
│   │   │   ├── checkout.locators.ts
│   │   │   ├── inventory.locators.ts
│   │   │   └── login.locators.ts
│   │   ├── pages             # Page Object Model classes
│   │   │   ├── cart.page.ts
│   │   │   ├── checkout.page.ts
│   │   │   ├── inventory.page.ts
│   │   │   └── login.page.ts
│   │   ├── step_definitions  # Cucumber step implementations
│   │   │   ├── cart.steps.ts
│   │   │   ├── checkout.steps.ts
│   │   │   ├── inventory.steps.ts
│   │   │   └── login.steps.ts
│   │   ├── commands.ts       # Custom Cypress commands
│   │   └── e2e.ts            # Global test configuration
├── .gitignore
├── .vscode
│   └── settings.json         # VSCode Cucumber autocomplete settings
├── cypress.config.ts         # Cypress configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nchadha28107/SauceLab.git
   cd SauceLab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Test credentials:**
   
   Pre-configured in `cypress/fixtures/login.json`:
   ```json
   {
     "username": "standard_user",
     "password": "secret_sauce"
   }
   ```

## Running Tests

### Basic Commands

```bash
# Open Cypress Test Runner (GUI)
npx cypress open

# Run all tests in headless mode
npx cypress run

# Run with specific browser
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

### Environment Configuration

```bash
# Run against development environment (default)
npx cypress run --env environment=dev

# Run against local environment
npx cypress run --env environment=local
```

Update environment URLs in `cypress/support/config/urls.json`:
```json
{
    "local": "http://localhost:8081/",
    "dev": "https://www.saucedemo.com"
}
```

### Cross-Browser Testing

```bash
# Chrome
npx cypress run --browser chrome --env environment=dev

# Firefox
npx cypress run --browser firefox --env environment=dev

# Edge
npx cypress run --browser edge --env environment=dev

# Electron (default)
npx cypress run --env environment=dev
```

### Viewport/Device Testing

```bash
# iPhone XR viewport
npx cypress run --env environment=dev,device=iphone-xr

# MacBook 15 viewport (default)
npx cypress run --env environment=dev,device=macbook-15

# iPad
npx cypress run --env environment=dev,device=ipad-2
```

**Available Viewport Presets:**

| Device | Width | Height |
|--------|-------|--------|
| iphone-xr | 414 | 896 |
| iphone-x | 375 | 812 |
| iphone-se2 | 375 | 667 |
| ipad-2 | 768 | 1024 |
| macbook-13 | 1280 | 800 |
| macbook-15 | 1440 | 900 |
| macbook-16 | 1536 | 960 |
| samsung-s10 | 360 | 760 |

## Test Scenario Coverage

### Feature: E-Commerce Checkout Flow

**Scenario:** Complete checkout with 3 random items

**Test Steps:**
1. User lands on login page
2. User logs in with valid credentials
3. User verifies inventory page is loaded
4. User adds 3 random items to cart
5. User navigates to cart
6. Cart validates 3 items are present
7. Cart validates correct product names and prices
8. User proceeds to checkout
9. User fills checkout information with random data
10. Checkout overview validates correct product names and prices
11. Checkout overview validates correct subtotal
12. User completes the order
13. Order confirmation is verified

**Key Validations:**
- ✅ Product names match from inventory → cart → checkout
- ✅ Product prices remain consistent throughout flow
- ✅ Subtotal calculation is accurate
- ✅ Order completion message is displayed

## Test Reports

All test artifacts are generated in the `cypress/reports/` directory:

### 📊 Cucumber HTML Report
**Location:** `cypress/reports/html/cucumber.html`

Provides comprehensive test execution details:
- Feature and scenario descriptions
- Step-by-step execution status
- Pass/fail statistics
- Execution timestamps
- Error messages and stack traces

<img width="1920" height="1273" alt="image" src="https://github.com/user-attachments/assets/a3b5d853-4a0c-4f0d-ab96-711563da2d2a" />
*Sample test execution report showing all steps passed*

**To view the report:**
```bash
# After running tests
open cypress/reports/html/cucumber.html
```

### 🎥 Test Execution Videos
**Location:** `cypress/reports/videos/`
- Automatic recording of complete test execution
- Helpful for debugging failures

### 📸 Failure Screenshots
**Location:** `cypress/reports/screenshots/`
- Captured automatically on test failures
- Shows exact application state at failure point

**Note:** Reports are excluded from version control via `.gitignore`
