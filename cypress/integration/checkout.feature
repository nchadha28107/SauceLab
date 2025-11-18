Feature: Sauce Labs E-commerce Checkout Flow

  Scenario: Complete checkout with 3 random items
    Given user lands on login page
    When user logs in with valid credentials
    Then user should be on inventory page
    When user adds 3 random items to cart
    And user navigates to cart
    Then cart should contain 3 items
    And cart should display correct item names and prices
    When user proceeds to checkout
    And user fills checkout information
    Then checkout overview should display correct item names and prices
    And checkout overview should display correct total price
    When user completes the order
    Then order should be confirmed successfully