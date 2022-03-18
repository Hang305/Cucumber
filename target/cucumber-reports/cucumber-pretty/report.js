$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/SignUp.feature");
formatter.feature({
  "name": "This is test scenario",
  "description": "  I want sign up into IResource website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify title is displayed correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SU01_Title"
    }
  ]
});
formatter.step({
  "name": "Open sign up page",
  "keyword": "Given "
});
formatter.step({
  "name": "The title is displayed correctly \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "Sign Up"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify title is displayed correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SU01_Title"
    }
  ]
});
formatter.step({
  "name": "Open sign up page",
  "keyword": "Given "
});
formatter.match({
  "location": "SignUpSteps.openSignUpPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The title is displayed correctly \"Sign Up\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theTitleIsDisplayedCorrectlyTitle(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"Common.HelperAction.equals(Object, Object)\" because \"this.helperAction\" is null\r\n\tat Steps.LoginSteps.theTitleIsDisplayedCorrectlyTitle(LoginSteps.java:25)\r\n\tat ✽.The title is displayed correctly \"Sign Up\"(file:src/test/resources/feature/SignUp.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify all fields is blank data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SU03_Blank"
    }
  ]
});
formatter.step({
  "name": "Open sign up page",
  "keyword": "Given "
});
formatter.match({
  "location": "SignUpSteps.openSignUpPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enters blank data for all fields",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpSteps.iEntersBlankDataForAllFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Sign up button",
  "keyword": "When "
});
formatter.match({
  "location": "SignUpSteps.iClickOnTheSignUpButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The error message is displayed correctly with first name, last name, email, password and confirm password",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpSteps.theErrorMessageIsDisplayedCorrectlyWithFirstNameLastNameEmailPasswordAndConfirmPassword()"
});
formatter.result({
  "status": "passed"
});
});