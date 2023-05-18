$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A_Register.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Register",
  "description": "",
  "id": "nopcommerce-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "NopCommerce Registration with valid details",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-registration-with-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User Click on Register btn",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User able to enter personal details \"\u003cFirstname\u003e\" \"\u003cLastname\u003e\" \"\u003cDateOfBirth\u003e\" \"\u003cDateOfMonth\u003e\" \"\u003cDateOfYear\u003e\" \"\u003cEmail\u003e\" \"\u003cCompanyName\u003e\"  \"\u003cPassword\u003e\" \"\u003cConfirmPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Register btn submit",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User close the browser1",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-registration-with-valid-details;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "",
        "Lastname",
        "",
        "DateOfBirth",
        "",
        "DateOfMonth",
        "",
        "DateOfYear",
        "",
        "Email",
        "",
        "CompanyName",
        "",
        "Password",
        "",
        "ConfirmPassword"
      ],
      "line": 13,
      "id": "nopcommerce-register;nopcommerce-registration-with-valid-details;;1"
    },
    {
      "cells": [
        "Abhishek",
        "",
        "Sanghavi",
        "",
        "14",
        "",
        "July",
        "",
        "1987",
        "",
        "rohan123@gmail.com",
        "",
        "Marks Wholesale Ltd",
        "",
        "rohan123",
        "",
        "rohan123"
      ],
      "line": 14,
      "id": "nopcommerce-register;nopcommerce-registration-with-valid-details;;2"
    }
  ],
  "keyword": "Examples"
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
  "name": "User able to open Browser1",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter an Url1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_able_to_open_Browser1()"
});
formatter.result({
  "duration": 7989695000,
  "status": "passed"
});
formatter.match({
  "location": "Register.enter_an_Url1()"
});
formatter.result({
  "duration": 1681403700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "NopCommerce Registration with valid details",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-registration-with-valid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User Click on Register btn",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User able to enter personal details \"Abhishek\" \"Sanghavi\" \"14\" \"July\" \"1987\" \"rohan123@gmail.com\" \"Marks Wholesale Ltd\"  \"rohan123\" \"rohan123\"",
  "matchedColumns": [
    0,
    16,
    2,
    4,
    6,
    8,
    10,
    12,
    14
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Register btn submit",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User close the browser1",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_Click_on_Register_btn()"
});
formatter.result({
  "duration": 1224516300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhishek",
      "offset": 37
    },
    {
      "val": "Sanghavi",
      "offset": 48
    },
    {
      "val": "14",
      "offset": 59
    },
    {
      "val": "July",
      "offset": 64
    },
    {
      "val": "1987",
      "offset": 71
    },
    {
      "val": "rohan123@gmail.com",
      "offset": 78
    },
    {
      "val": "Marks Wholesale Ltd",
      "offset": 99
    },
    {
      "val": "rohan123",
      "offset": 122
    },
    {
      "val": "rohan123",
      "offset": 133
    }
  ],
  "location": "Register.user_able_to_enter_personal_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2207830300,
  "status": "passed"
});
formatter.match({
  "location": "Register.click_on_Register_btn_submit()"
});
formatter.result({
  "duration": 736751600,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_close_the_browser1()"
});
formatter.result({
  "duration": 262568700,
  "status": "passed"
});
formatter.uri("C_Login.feature");
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
  "duration": 2410967100,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1559951400,
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
  "duration": 1237680201,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 25007301,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_username_and_password_and_click_on_login_button()"
});
formatter.result({
  "duration": 903586500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 238433000,
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
  "duration": 2374104200,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1609594700,
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
  "duration": 1206256500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 21241600,
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
  "duration": 1152516799,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 184152400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 25,
      "value": "# Data Driven with Example keyword"
    }
  ],
  "line": 27,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 34,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;1"
    },
    {
      "cells": [
        "abcd2@gmail.com",
        "Test@123"
      ],
      "line": 35,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;2"
    },
    {
      "cells": [
        "abcd3@gmail.com",
        "Test@123"
      ],
      "line": 36,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;3"
    },
    {
      "cells": [
        "abcd4@gmail.com",
        "Test@123"
      ],
      "line": 37,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;4"
    }
  ],
  "keyword": "Examples"
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
  "duration": 2248272400,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1336012500,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter \"abcd2@gmail.com\" and \"Test@123\" and Click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 1229512200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 18673601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd2@gmail.com",
      "offset": 12
    },
    {
      "val": "Test@123",
      "offset": 34
    }
  ],
  "location": "Login.user_enter_and_and_Click_on_login_button(String,String)"
});
formatter.result({
  "duration": 1180847399,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 339328800,
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
  "duration": 2342717199,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1637303400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter \"abcd3@gmail.com\" and \"Test@123\" and Click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 1234307400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 20855699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3@gmail.com",
      "offset": 12
    },
    {
      "val": "Test@123",
      "offset": 34
    }
  ],
  "location": "Login.user_enter_and_and_Click_on_login_button(String,String)"
});
formatter.result({
  "duration": 892891000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 34001,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 298757799,
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
  "duration": 2203934801,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1645352599,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter \"abcd4@gmail.com\" and \"Test@123\" and Click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 1243284100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 22598600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd4@gmail.com",
      "offset": 12
    },
    {
      "val": "Test@123",
      "offset": 34
    }
  ],
  "location": "Login.user_enter_and_and_Click_on_login_button(String,String)"
});
formatter.result({
  "duration": 1142254201,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 270159599,
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
  "duration": 2420115599,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 1283465900,
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
  "duration": 1196194900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 19963100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_USERNAME_and_PASSWORD_and_click_on_login_button(DataTable)"
});
formatter.result({
  "duration": 1154255501,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 130200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 303144301,
  "status": "passed"
});
});