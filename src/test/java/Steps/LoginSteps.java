package Steps;

import Common.HelperAction;
import Pages.ExplorePage;
import Pages.LoginPage;
import Test.BaseTest;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends BaseTest {
    LoginPage loginPage = new LoginPage(driver);
    HelperAction helperAction;
    ExplorePage explorePage = new ExplorePage(driver);

    @Given("Open login page")
    public void openLoginPage() {
        driver.get(BASE_URL);
        helperAction = new HelperAction(driver);
    }

    @Then("The title is displayed correctly {string}")
    public void theTitleIsDisplayedCorrectlyTitle( String title) {
        helperAction.equals(loginPage.titleElem(), title);
    }
    @Then("The description is displayed correctly {string}")
    public void theDescriptionIsDisplayedCorrectly(String description) {
        helperAction.equals(loginPage.descriptionElem(), description);
    }
    @And("I enters the email not already on DB")
    public void iEntersTheEmailNotAlreadyOnDB() {
        loginPage.clear();
        loginPage.loginPage("ha@gmail.com", "123456");
    }

    @When("I click on the Login button")
    public void iClickOnTheLoginButton() {
        loginPage.clickOnLoginBtn();
    }

    @Then("The modal alert is displayed correctly")
    public void theModalAlertIsDisplayedCorrectly() throws InterruptedException {
        Thread.sleep(2000);
        helperAction.equals(loginPage.modalAlertElem(), "Email or password is invalid.");
    }
    @And("I enters password field with input data has not already on DB")
    public void iEntersPasswordFieldWithInputDataHasNotAlreadyOnDB() throws InterruptedException {
        loginPage.clear();
        Thread.sleep(2000);
        loginPage.loginPage("hanglee305+persona5@gmail.com", "3454543");
    }

    @Then("The Explore page is displayed")
    public void theExplorePageIsDisplayed() throws InterruptedException {
        Thread.sleep(3000);
        helperAction.equals(driver.getCurrentUrl(), BASE_URL.concat(EXPLORE_PAGES));
        explorePage.logout();
    }

    @And("I enters blank data for the email field")
    public void iEntersBlankDataForTheEmailField() {
        loginPage.loginPage("", "");
    }

    @Then("The error message is displayed correctly with email and password fields")
    public void theErrorMessageIsDisplayedCorrectlyWithEmailAndPasswordFields() {
        helperAction.equals(loginPage.emailErrorElem(), "Required!");
        helperAction.equals(loginPage.passwordErrorElem(), "Required!");
    }

    @And("I enters the mandatory fields with email and password fields")
    public void iEntersTheMandatoryFieldsWithEmailAndPasswordFields() {
        loginPage.clear();
        loginPage.loginPage("hanglee305+persona5@gmail.com", "123456");
    }

    @And("I enters email field with input data invalid format")
    public void iEntersEmailFieldWithInputDataInvalidFormat() {
        loginPage.clear();
        loginPage.loginPage("hang@gmail", "123456");
    }

    @Then("The error message of email field is displayed correctly")
    public void theErrorMessageOfEmailFieldIsDisplayedCorrectly() {
        helperAction.equals(loginPage.emailErrorElem(), "Invalid email format");
    }

    @And("I enters password field with input data invalid length")
    public void iEntersPasswordFieldWithInputDataInvalidLength() {
        loginPage.clear();
        loginPage.loginPage("hang@gmail.com", "12");
    }

    @Then("The error message of password field is displayed correctly")
    public void theErrorMessageOfPasswordFieldIsDisplayedCorrectly() throws InterruptedException {
        Thread.sleep(2000);
        helperAction.equals(loginPage.passwordErrorElem(), "Minimum 5 characters");
    }

    @Then("The checkbox of remember is checked")
    public void theCheckboxOfRememberIsChecked() {
        helperAction.equals(loginPage.checkRememberElem(), false);
    }
}
