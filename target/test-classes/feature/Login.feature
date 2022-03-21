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
  Scenario Outline: Verify all fields is blank data
    Given Open login page
    And I enters blank data for the email field
    When I click on the Login button
    Then The error message of email and password fields is displayed correctly with "<message>" content
    Examples:
      | message   |
      | Required! |

  @LG04_EMAIL_NOT_ALREADY_ON_DB
  Scenario Outline: Verify email field is NOT already on DB
    Given Open login page
    Then The modal alert is displayed correctly with "<message>" content for email field not already on DB read from file excel
    Examples:
      | message   |
      | Email or password is invalid. |

  @LG05_Password_NotAlreadyOnDB
  Scenario Outline: Verify password field is NOT already on DB
    Given Open login page
    Then The modal alert is displayed correctly with "<message>" content for password field not already on DB read from file excel
    Examples:
      | message   |
      | Email or password is invalid. |

  @LG06_Email_InvalidFormat
  Scenario Outline: Check email field with input data invalid format
    Given Open login page
    Then The error message of email field is displayed correctly with "<message>" content for invalid data read from file excel
    Examples:
      | message   |
      | Invalid email format |

  @LG07_Password_InvalidLength
  Scenario Outline: Check password field with input data invalid length
    Given Open login page
    Then The error message of password field is displayed correctly with "<message>" content for invalid data read from file excel
    Examples:
      | message   |
      | Minimum 5 characters |

  @LG08_Valid_data
  Scenario: Verify on entering data to all fields
    Then User login account successfully with valid data for the mandatory fields reading from file excel

  @LG09_Default_Remember
  Scenario: Verify the default remember is checked
    Given Open login page
    Then The checkbox of remember is checked

  @LG10_Show_Password_Test
  Scenario: Verify the password is displayed with type text
    Given Open login page
    When Enter input data password and click on the Eye icon
    Then The password field is displayed with type text

  @LG011_SignUpLink
    Scenario: Verify the Sign up hyperlink is active
      Given Open login page
      When Click on the sign up hyperlink
      Then The Sign up page is displayed

