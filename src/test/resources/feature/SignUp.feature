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
  Scenario: Verify all fields is blank data
    Given Open sign up page
    And I enters blank data for all fields
    When I click on the Sign up button
    Then The error message is displayed correctly with first name, last name, email, password and confirm password

    @SG04_FirstName_InvalidData
    Scenario: Check first name field that input data invalid data
      Given Open sign up page
      And I enters blank data for all fields
      When I click on the Sign up button
      Then The error message is displayed correctly with first name, last name, email, password and confirm password