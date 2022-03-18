package Steps;

import Common.HelperAction;
import Pages.SignUpPage;
import Test.BaseTest;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.annotations.AfterClass;

import java.util.Arrays;
import java.util.List;

public class SignUpSteps extends BaseTest {
    SignUpPage signUp = new SignUpPage(driver);
    HelperAction helperAction;

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

    @And("I enters blank data for first name field")
    public void iEntersBlankDataForFirstNameField() {
        signUp.signUpPage("34", "", "", "", "");
    }
    @Then("The error message is displayed correctly with first name field with {string} content")
    public void theErrorMessageIsDisplayedCorrectlyWithFirstNameFieldWithContent(String msg) {
        helperAction.equals(signUp.firstNameErrorELem(), msg);
    }

    @And("I enters invalid data for first name field")
    public void iEntersInvalidDataForFirstNameField() {
        signUp.signUpPage("","34","","","");
    }

    @Then("The error message is displayed correctly with last name field with {string} content")
    public void theErrorMessageIsDisplayedCorrectlyWithLastNameFieldWithContent(String msg) {
        helperAction.equals(signUp.lastnameErrorELem(),msg);
    }

    @And("I enters invalid data for email field")
    public void iEntersInvalidDataForEmailField() {
        signUp.signUpPage("","","ha@gmail","","");
    }

    @Then("The error message is displayed correctly with email field with {string} content")
    public void theErrorMessageIsDisplayedCorrectlyWithEmailFieldWithContent(String message) {
        helperAction.equals(signUp.emailErrorElem(),message);
    }

    @And("I enters invalid data for password field")
    public void iEntersInvalidDataForPasswordField() {
        signUp.signup("","","","ha12","");
    }

    @Then("The error message is displayed correctly with password field with {string} content")
    public void theErrorMessageIsDisplayedCorrectlyWithPasswordFieldWithContent(String msg) {
        helperAction.equals(signUp.passwordErrorElem(),msg);
    }

    @And("I enters invalid data for confirm password field")
    public void iEntersInvalidDataForConfirmPasswordField() {
        signUp.signup("","","","","23");
    }

    @Then("The error message is displayed correctly with confirm password field with {string} content")
    public void theErrorMessageIsDisplayedCorrectlyWithConfirmPasswordFieldWithContent(String msg) {
        helperAction.equals(signUp.confirmPasswordErrorELem(),msg);
    }

    @And("I enters valid data for all fields")
    public void iEntersValidDataForAllFields() {
        String email = "hang.le" + signUp.randomNumber();
        signUp.signup("Hang","test",email+ "@mailsac.com","Ha123@","Ha123@");
    }

    @Then("The Verify Email page is displayed correctly")
    public void theVerifyEmailPageIsDisplayedCorrectly() {
        helperAction.equals(driver.getCurrentUrl(),BASE_URL.concat(VERIFY_EMAIL));
    }
    @AfterClass
    public void tearDown(){
        this.driver.quit();
    }


}
