Feature: NopCommerce Login
  Background:
    Given User able to open Browser
    And Enter an Url


# Simple Hard coded scenario.
  @E2E @Regression @Login
  Scenario: Nopcommerce Valid Login Test
    When User click on Login Link
    And User on Login Page and Verify Login page Title
    Then User enter username and password and click on login button
    Then User is on Home Page and Verify Home page Title
    And User close the browser

# Simple Data Driven without Example keyword
  @E2E @Sanity
  Scenario: Nopcommerce Valid Login Test
    When User click on Login Link
    And User on Login Page and Verify Login page Title
    Then User enter "abcd1@gmail.com" and "Test@123" and click on login button
    Then User is on Home Page and Verify Home page Title
    And User close the browser

# Data Driven with Example keyword
  @Smoke
  Scenario Outline: Nopcommerce Valid Login Test
    When User click on Login Link
    And User on Login Page and Verify Login page Title
    Then User enter "<Username>" and "<Password>" and Click on login button
    Then User is on Home Page and Verify Home page Title
    And User close the browser
    Examples:
      | Username |Password|
      | abcd2@gmail.com|Test@123|
      | abcd3@gmail.com|Test@123|
      | abcd4@gmail.com|Test@123|

# Data Table
  @Sanity @Regression @E2E
  Scenario: Nopcommerce Valid Login Test
    When User click on Login Link
    And User on Login Page and Verify Login page Title
    Then User enter USERNAME and PASSWORD and click on login button
    |abcd5@gmail.com|Test@123|
    Then User is on Home Page and Verify Home page Title
    And User close the browser




