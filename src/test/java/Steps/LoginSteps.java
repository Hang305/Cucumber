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
        loginPage.clear();
    }

    @Then("The title is displayed correctly {string}")
    public void theTitleIsDisplayedCorrectlyTitle(String title) {
        helperAction.equals(loginPage.titleElem(), title);
    }

    @Then("The description is displayed correctly {string}")
    public void theDescriptionIsDisplayedCorrectly(String description) {
        helperAction.equals(loginPage.descriptionElem(), description);
    }

    @And("I enters the email not already on DB")
    public void iEntersTheEmailNotAlreadyOnDB() {
        loginPage.loginPage("ha@gmail.com", "123456");
    }

    @When("I click on the Login button")
    public void iClickOnTheLoginButton() {
        loginPage.clickOnLoginBtn();
    }

    @Then("The modal alert is displayed correctly with {string} content")
    public void theModalAlertIsDisplayedCorrectlyWithContent(String msg) throws InterruptedException {
        Thread.sleep(2000);
        helperAction.equals(loginPage.modalAlertElem(), msg);
    }

    @And("I enters password field with input data has not already on DB")
    public void iEntersPasswordFieldWithInputDataHasNotAlreadyOnDB() throws InterruptedException {
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

    @Then("The error message of email and password fields is displayed correctly with {string} content")
    public void theErrorMessageOfEmailAndPasswordFieldsIsDisplayedCorrectlyWithContent(String msg) {
        helperAction.equals(loginPage.emailErrorElem(), msg);
        helperAction.equals(loginPage.passwordErrorElem(), msg);
    }

    @And("I enters the mandatory fields with email and password fields")
    public void iEntersTheMandatoryFieldsWithEmailAndPasswordFields() {
        loginPage.loginPage("hanglee305+persona5@gmail.com", "123456");
    }

    @And("I enters email field with input data invalid format")
    public void iEntersEmailFieldWithInputDataInvalidFormat() {
        loginPage.loginPage("hang@gmail", "123456");
    }

    @Then("The error message of email field is displayed correctly with {string} content")
    public void theErrorMessageOfEmailFieldIsDisplayedCorrectlyWithContent(String msg) {
        helperAction.equals(loginPage.emailErrorElem(), msg);
    }

    @And("I enters password field with input data invalid length")
    public void iEntersPasswordFieldWithInputDataInvalidLength() {
        loginPage.loginPage("hang@gmail.com", "12");
    }

    @Then("The error message of password field is displayed correctly with {string} content")
    public void theErrorMessageOfPasswordFieldIsDisplayedCorrectlyWithContent(String msg) throws InterruptedException {
        Thread.sleep(2000);
        helperAction.equals(loginPage.passwordErrorElem(), "Minimum 5 characters");
    }

    @Then("The checkbox of remember is checked")
    public void theCheckboxOfRememberIsChecked() {
        helperAction.equals(loginPage.checkRememberElem(), false);
    }
}
