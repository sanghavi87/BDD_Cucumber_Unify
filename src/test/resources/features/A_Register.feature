Feature: NopCommerce Register
  Background:
    Given User able to open Browser1
    And Enter an Url1


    Scenario Outline: NopCommerce Registration with valid details
      When User Click on Register btn
      Then User able to enter personal details "<Firstname>" "<Lastname>" "<DateOfBirth>" "<DateOfMonth>" "<DateOfYear>" "<Email>" "<CompanyName>"  "<Password>" "<ConfirmPassword>"
      Then click on Register btn submit
      Then User close the browser1
      Examples:
       |Firstname| |Lastname| |DateOfBirth| |DateOfMonth| |DateOfYear| |Email| |CompanyName|  |Password| |ConfirmPassword|
        |Abhishek|  |Sanghavi|    |14 |          |July|      |1987|     |rohan123@gmail.com| |Marks Wholesale Ltd||rohan123| |rohan123|
