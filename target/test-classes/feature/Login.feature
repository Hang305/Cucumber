Feature: This is test scenario
  I want login into IResource website

  @LG01_Title
  Scenario Outline: Verify title is displayed correctly
    Given Open login page
    Then The title is displayed correctly "<title>"
    Examples:
      | title  |
      | Log In |
  @LG02_Description
  Scenario Outline: Verify description is displayed correctly
    Given Open login page
    Then The description is displayed correctly "<description>"
    Examples:
      | description  |
      | Hello and welcome ! |

  @LG03_Blank
  Scenario: Verify all fields is blank data
    Given Open login page
    And I enters blank data for the email field
    When I click on the Login button
    Then The error message is displayed correctly with email and password fields

  @LG04_EMAIL_NOT_ALREADY_ON_DB
  Scenario: Verify email field is NOT already on DB
    Given Open login page
    And I enters the email not already on DB
    When I click on the Login button
    Then The modal alert is displayed correctly

  @LG05_Password_NotAlreadyOnDB
  Scenario: Verify password field is NOT already on DB
    Given Open login page
    And I enters password field with input data has not already on DB
    When I click on the Login button
    Then The modal alert is displayed correctly

  @LG06_Email_InvalidFormat
  Scenario: Check email field with input data invalid format
    Given Open login page
    And I enters email field with input data invalid format
    When I click on the Login button
    Then The error message of email field is displayed correctly

  @LG07_Password_InvalidLength
  Scenario: Check password field with input data invalid length
    Given Open login page
    And I enters password field with input data invalid length
    When I click on the Login button
    Then The error message of password field is displayed correctly

  @LG08_Valid_data
  Scenario: Verify on entering data to all fields
    Given Open login page
    And I enters the mandatory fields with email and password fields
    When I click on the Login button
    Then The Explore page is displayed

  @LG09_Default_Remember
  Scenario: Verify the default remember is checked
    Given Open login page
    Then The checkbox of remember is checked

