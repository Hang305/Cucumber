package Steps;

import Common.HelperAction;
import DrivenData.TestDataSignUpProvider;
import Pages.LoginPage;
import Pages.SignUpPage;
import Test.BaseTest;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.Arrays;
import java.util.List;

public class SignUpSteps extends BaseTest {
    SignUpPage signUp = new SignUpPage(driver);
    TestDataSignUpProvider testDataSignUp = new TestDataSignUpProvider(driver);
    HelperAction helperAction;
    LoginPage loginpage = new LoginPage(driver);

    @Given("Open sign up page")
    public void openSignUpPage() {
        driver.get(BASE_URL.concat(SIGNUP));
        helperAction = new HelperAction(driver);
        signUp.clear();
    }

    @Then("The title of signup page is displayed correctly with{string}")
    public void theTitleOfSignupPageIsDisplayedCorrectlyWith(String title) {
        helperAction.equals(signUp.titleElem(), title);
    }

    @Then("The status of persona checkbox is checked")
    public void theStatusOfPersonaCheckboxIsChecked() {
        helperAction.equals(signUp.personaCheckElem(), true);
    }

    @And("I enters blank data for all fields")
    public void iEntersBlankDataForAllFields() {
        signUp.signUpPage("", "", "", "", "");
    }

    @When("I click on the Sign up button")
    public void iClickOnTheSignUpButton() {
        signUp.clickOnSignUpBtn();
    }

    @Then("The error message of all fields is displayed correctly with {string} content")
    public void theErrorMessageOfAllFieldsIsDisplayedCorrectlyWithContent(String msg) {
        List<String> expectedMessageTest = Arrays.asList(msg, msg, msg, msg, msg);
        List<String> actualMessageTest = Arrays.asList(signUp.firstNameErrorELem(), signUp.lastnameErrorELem(), signUp.emailErrorElem(), signUp.passwordErrorElem(), signUp.confirmPasswordErrorELem());
        helperAction.equals(actualMessageTest, expectedMessageTest);
    }

    @Then("The error message is displayed correctly with {string} content for input invalid data of first name field read from file excel")
    public void theErrorMessageIsDisplayedCorrectlyWithContentForInputInvalidDataOfFirstNameFieldReadFromFileExcel(String msg) {
        testDataSignUp.FirstNameInvalidDataTest(msg);
    }

    @Then("The error message is displayed correctly  with {string} content for invalid data of last name field read from file excel")
    public void theErrorMessageIsDisplayedCorrectlyWithContentForInvalidDataOfLastNameFieldReadFromFileExcel(String msg) {
        testDataSignUp.LastNameInvalidDataTest(msg);
    }

    @Then("The error message of email field is displayed correctly with {string} content for invalid data of email field read from file excel")
    public void theErrorMessageOfEmailFieldIsDisplayedCorrectlyWithContentForInvalidDataOfEmailFieldReadFromFileExcel(String msg) {
        testDataSignUp.EmailInvalidDataTest(msg);
    }

    @Then("The error message is displayed correctly with {string} content for invalid data of the password field read from file excel")
    public void theErrorMessageIsDisplayedCorrectlyWithContentForInvalidDataOfThePasswordFieldReadFromFileExcel(String msg) {
        testDataSignUp.PasswordInvalidDataTest(msg);
    }

    @Then("The error message is displayed correctly with {string} content for invalid data of the confirm password field read from file excel")
    public void theErrorMessageIsDisplayedCorrectlyWithContentForInvalidDataOfTheConfirmPasswordFieldReadFromFileExcel(String msg) {
        testDataSignUp.ConfirmPasswordInvalidDataTest(msg);
    }

    @Then("User login successfully with input valid all the fields and verify email success")
    public void userLoginSuccessfullyWithInputValidAllTheFieldsAndVerifyEmailSuccess() throws InterruptedException {
        testDataSignUp.SignUpTestDataValidData();
    }

    @When("Click on the login hyperlink")
    public void clickOnTheLoginHyperlink() {
        signUp.clickOnLoginLink();
    }

    @Then("The login page is displayed")
    public void theLoginPageIsDisplayed() throws InterruptedException {
        Thread.sleep(5000);
        helperAction.equals(driver.getCurrentUrl(), BASE_URL.concat(LOGIN));
//        loginpage.clickOnSignUpLink();
    }



}
