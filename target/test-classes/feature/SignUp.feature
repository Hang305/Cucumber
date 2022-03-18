Feature: This is test scenario
  I want sign up into IResource website

  @SU01_Title
  Scenario Outline: Verify title is displayed correctly
    Given Open sign up page
    Then The title of signup page is displayed correctly with"<title>"
    Examples:
      | title   |
      | Sign Up |

  @SG02_PersonaIsChecked
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

  @SG04_FirstName_InvalidData
  Scenario Outline: Check first name field with input data invalid data
    Given Open sign up page
    And I enters blank data for first name field
    When I click on the Sign up button
    Then The error message is displayed correctly with first name field with "<message>" content
    Examples:
      | message                 |
      | Please enter valid name |

  @SG05_LastName_InvalidData
  Scenario Outline: Check last name field with input data invalid data
    Given Open sign up page
    And I enters invalid data for first name field
    When I click on the Sign up button
    Then The error message is displayed correctly with last name field with "<message>" content
    Examples:
      | message                 |
      | Please enter valid name |

  @SG06_Email_InvalidData
  Scenario Outline: Check email field with input data invalid data
    Given Open sign up page
    And I enters invalid data for email field
    When I click on the Sign up button
    Then The error message is displayed correctly with email field with "<message>" content
    Examples:
      | message              |
      | Invalid email format |

  @SG07_Password_InvalidData
  Scenario Outline: Check password field with input data invalid data
    Given Open sign up page
    And I enters invalid data for password field
    When I click on the Sign up button
    Then The error message is displayed correctly with password field with "<message>" content
    Examples:
      | message                                                           |
      | At least one uppercase, one number and one special case character |

  @SG08_ConfirmPassword_NotMatch
  Scenario Outline: Check confirm password field with input data invalid data
    Given Open sign up page
    And I enters invalid data for confirm password field
    When I click on the Sign up button
    Then The error message is displayed correctly with confirm password field with "<message>" content
    Examples:
      | message                |
      | Password doesn’t match |

#  @SG09_SignUpSuccess
#  Scenario: Verify sign up success with valid all the fields
#    Given Open sign up page
#    And I enters valid data for all fields
#    When I click on the Sign up button
#    Then The Verify Email page is displayed correctly