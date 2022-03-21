package Test;

import Common.HelperAction;
import DrivenData.TestDataLoginProvider;
import Pages.LoginPage;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest {
    LoginPage loginPage = new LoginPage(driver);
    TestDataLoginProvider loginValidDataTest = new TestDataLoginProvider(driver);

    //TC01: Email and password is blank
    @BeforeMethod
    public void init() {
        driver.get(BASE_URL);
        helperAction = new HelperAction(driver);
        loginPage.clear();
    }

    @Test
    public void TC01_Blank() throws InterruptedException {
        loginPage.login("", "");
        helperAction.equals(loginPage.emailErrorElem(), "Required!");
        Thread.sleep(2000);
        helperAction.equals(loginPage.passwordErrorElem(), "Required!");
    }

    //TC02: Input email NOT already on DB
    @Test
    public void TC02_Email_NotAlreadyOnDB() throws InterruptedException {
        loginPage.login("ha@gmail.com", "123456");
        Thread.sleep(2000);
        helperAction.equals(loginPage.modalAlertElem(), "Email or password is invalid.");
    }

    //TC03:  Input password is NOT already on DB
    @Test
    public void TC03_Password_NotAlreadyOnDB() throws InterruptedException {
        loginPage.login("hanglee305+persona5@gmail.com", "18272");
        Thread.sleep(3000);
//        WebDriverWait wait = new WebDriverWait(driver, 10L);
//        wait.until(ExpectedConditions.visibilityOfElementLocated((By) loginPage.modalAlertSel));
        helperAction.equals(loginPage.modalAlertElem(), "Email or password is invalid.");
    }

    //TC04: Login with invalid format of email
    @Test
    public void TC04_Email_InvalidFormat() throws InterruptedException {
        loginPage.login("ha@gmail", "1234");
        Thread.sleep(3000);
        helperAction.equals(loginPage.emailErrorElem(), "Invalid email format");
    }

    //TC05: Login with invalid length of password
    @Test
    public void TC05_Password_InvalidLength() throws InterruptedException {
//        loginPage.clear();
        loginPage.login("ha@gmail.com", "12");
        Thread.sleep(3000);
        helperAction.equals(loginPage.passwordErrorElem(), "Minimum 5 characters");
    }

    //TC06: Login success with valid data
    @Test
    public void TC06_Success() throws InterruptedException {
        loginValidDataTest.LoginTestDataValidData();
    }

    //TC07: Get title
    @Test
    public void TC07_Title() {
        helperAction.equals(loginPage.titleElem(), "Log In");
    }

    //TC08: get description
    @Test
    public void TC08_Decription() {
        helperAction.equals(loginPage.descriptionElem(), "Hello and welcome !");
    }

    //TC09: the default remember is checked
    @Test
    public void TC09_DefaultRemember() {
        helperAction.equals(loginPage.checkRememberElem(), false);
    }

    //TC10: show password eye
    @Test
    public void TC10_showPasswordEye() {
        loginPage.loginPage("ha@gmail", "1234");
        loginPage.showPasswordEye();
        helperAction.equals(loginPage.checkShowTextPassword(), true);
    }
}
