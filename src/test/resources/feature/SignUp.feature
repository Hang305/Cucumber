Feature: This is test scenario
  I want sign up into IResource website

  @SU01_Title
  Scenario Outline: Verify title is displayed correctly
    Given Open sign up page
    Then The title of signup page is displayed correctly with"<title>"
    Examples:
      | title   |
      | Sign Up |

  @SU02_PersonaIsChecked
  Scenario: Verify the default of checkbox is the checked persona
    Given Open sign up page
    Then The status of persona checkbox is checked

  @SU03_Blank
  Scenario Outline: Verify all fields is blank data
    Given Open sign up page
    And I enters blank data for all fields
    When I click on the Sign up button
    Then The error message of all fields is displayed correctly with "<message>" content
    Examples:
      | message   |
      | Required! |

  @SU04_FirstName_InvalidData
  Scenario Outline: Check first name field with input data invalid data
    Given Open sign up page
    Then The error message is displayed correctly with "<message>" content for input invalid data of first name field read from file excel
    Examples:
      | message                 |
      | Please enter valid name |

  @SU05_LastName_InvalidData
  Scenario Outline: Check last name field with input data invalid data
    Given Open sign up page
    Then The error message is displayed correctly  with "<message>" content for invalid data of last name field read from file excel
    Examples:
      | message                 |
      | Please enter valid name |

  @SU06_Email_InvalidData
  Scenario Outline: Check email field with input data invalid data
    Given Open sign up page
    Then The error message of email field is displayed correctly with "<message>" content for invalid data of email field read from file excel
    Examples:
      | message              |
      | Invalid email format |

  @SU07_Password_InvalidData
  Scenario Outline: Check password field with input data invalid data
    Given Open sign up page
    Then The error message is displayed correctly with "<message>" content for invalid data of the password field read from file excel
    Examples:
      | message                                                           |
      | At least one uppercase, one number and one special case character |

  @SU08_ConfirmPassword_NotMatch
  Scenario Outline: Check confirm password field with input data invalid data
    Given Open sign up page
    Then The error message is displayed correctly with "<message>" content for invalid data of the confirm password field read from file excel
    Examples:
      | message                |
      | Password doesn’t match |

  @SU09_SignUpSuccess
  Scenario: Verify sign up success with valid all the fields
    Given Open sign up page
#    And I enters valid data for all fields
#    When I click on the Sign up button
    Then User login successfully with input valid all the fields and verify email success

  @SU10_LoginLink
  Scenario: Verify the Sign up hyperlink is active
    Given Open sign up page
    When Click on the login hyperlink
    Then The login page is displayed