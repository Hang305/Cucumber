package Steps;

import Common.HelperAction;
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
    HelperAction helperAction;

    @Given("Open sign up page")
    public void openSignUpPage() {
        driver.get(BASE_URL.concat(SIGNUP));
        helperAction = new HelperAction(driver);
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
        signUp.signUpPage("","","","","");
    }

    @When("I click on the Sign up button")
    public void iClickOnTheSignUpButton() {
        signUp.clickOnSignUpBtn();
    }

    @Then("The error message is displayed correctly with first name, last name, email, password and confirm password")
    public void theErrorMessageIsDisplayedCorrectlyWithFirstNameLastNameEmailPasswordAndConfirmPassword() {
        List<String> expectedMessageTest = Arrays.asList("Required!", "Required!", "Required!", "Required!", "Required!");
        List<String> actualMessageTest = Arrays.asList(signUp.firstNameErrorELem(),signUp.lastnameErrorELem(),signUp.emailErrorElem(),signUp.passwordErrorElem(),signUp.confirmPasswordErrorELem() );
        helperAction.equals(actualMessageTest,expectedMessageTest);

    }


}
