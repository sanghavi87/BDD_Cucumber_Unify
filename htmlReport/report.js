$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/C_Login.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Login",
  "description": "",
  "id": "nopcommerce-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 9087070900,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1690551800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "# Simple Hard coded scenario."
    }
  ],
  "line": 9,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@E2E"
    },
    {
      "line": 8,
      "name": "@Regression"
    },
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter username and password and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 1213017200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 46111000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_username_and_password_and_click_on_login_button()"
});
formatter.result({
  "duration": 1226680300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 51000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 388699300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 2660303600,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1600680900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 16,
      "value": "# Simple Data Driven without Example keyword"
    }
  ],
  "line": 18,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@E2E"
    },
    {
      "line": 17,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enter \"abcd1@gmail.com\" and \"Test@123\" and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 1225918200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 21501000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1@gmail.com",
      "offset": 12
    },
    {
      "val": "Test@123",
      "offset": 34
    }
  ],
  "location": "Login.user_enter_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 1136069800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 410117200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 2441705000,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1661569200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 39,
      "value": "# Data Table"
    }
  ],
  "line": 41,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Sanity"
    },
    {
      "line": 40,
      "name": "@Regression"
    },
    {
      "line": 40,
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User enter USERNAME and PASSWORD and click on login button",
  "rows": [
    {
      "cells": [
        "abcd5@gmail.com",
        "Test@123"
      ],
      "line": 45
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 849149600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 23355700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_USERNAME_and_PASSWORD_and_click_on_login_button(DataTable)"
});
formatter.result({
  "duration": 883773600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 556219200,
  "status": "passed"
});
});