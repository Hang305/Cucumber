package Steps;

import Common.HelperAction;
import DrivenData.TestDataLoginProvider;
import Pages.ExplorePage;
import Pages.LoginPage;
import Pages.SignUpPage;
import Test.BaseTest;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends BaseTest {
    LoginPage loginPage = new LoginPage(driver);
    HelperAction helperAction;
    ExplorePage explorePage = new ExplorePage(driver);
    TestDataLoginProvider loginDataTest = new TestDataLoginProvider(driver);
    SignUpPage  signUpPage = new SignUpPage(driver);

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

    @Then("The modal alert is displayed correctly with {string} content for email field not already on DB read from file excel")
    public void theModalAlertIsDisplayedCorrectlyWithContentForEmailFieldNotAlreadyOnDBReadFromFileExcel(String msg) throws InterruptedException {
        loginDataTest.DataNotAlreadyOnDBTest(msg);
    }

    @Then("The modal alert is displayed correctly with {string} content for password field not already on DB read from file excel")
    public void theModalAlertIsDisplayedCorrectlyWithContentForPasswordFieldNotAlreadyOnDBReadFromFileExcel(String msg) throws InterruptedException {
        loginDataTest.DataNotAlreadyOnDBTest(msg);
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
    @When("I click on the Login button")
    public void iClickOnTheLoginButton() {
        loginPage.clickOnLoginBtn();
    }
    @Then("The error message of email and password fields is displayed correctly with {string} content")
    public void theErrorMessageOfEmailAndPasswordFieldsIsDisplayedCorrectlyWithContent(String msg) {
        helperAction.equals(loginPage.emailErrorElem(), msg);
        helperAction.equals(loginPage.passwordErrorElem(), msg);
    }

    @Then("User login account successfully with valid data for the mandatory fields reading from file excel")
    public void userLoginAccountSuccessfullyWithValidDataForTheMandatoryFieldsReadingFromFileExcel() throws InterruptedException {
        loginDataTest.LoginTestDataValidData();
    }

    @Then("The error message of email field is displayed correctly with {string} content for invalid data read from file excel")
    public void theErrorMessageOfEmailFieldIsDisplayedCorrectlyWithContentForInvalidDataReadFromFileExcel(String msg) {
        loginDataTest.EmailInvalidDataTest(msg);
    }

    @Then("The error message of password field is displayed correctly with {string} content for invalid data read from file excel")
    public void theErrorMessageOfPasswordFieldIsDisplayedCorrectlyWithContentForInvalidDataReadFromFileExcel(String msg) {
        loginDataTest.PasswordInvalidLengthDataTest(msg);
    }

    @Then("The checkbox of remember is checked")
    public void theCheckboxOfRememberIsChecked() {
        helperAction.equals(loginPage.checkRememberElem(), false);
    }

    @When("Click on the sign up hyperlink")
    public void clickOnTheSignUpHyperlink() {
        loginPage.clickOnSignUpLink();
    }

    @Then("The Sign up page is displayed")
    public void theSignUpPageIsDisplayed() throws InterruptedException {
        Thread.sleep(5000);
        helperAction.equals(driver.getCurrentUrl(), BASE_URL.concat(SIGNUP));
        signUpPage.clickOnLoginLink();
    }

    @When("Enter input data password and click on the Eye icon")
    public void enterInputDataPasswordAndClickOnTheEyeIcon() {
        loginPage.loginPage("ha@gmail", "1234");
        loginPage.showPasswordEye();
    }

    @Then("The password field is displayed with type text")
    public void thePasswordFieldIsDisplayedWithTypeText() {
        helperAction.equals(loginPage.checkShowTextPassword(), true);
    }
}
