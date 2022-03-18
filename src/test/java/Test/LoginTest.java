package Test;

import Common.DataObjectBuilder;
import Common.HelperAction;
import Models.Login;
import Pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.util.Iterator;

public class LoginTest extends BaseTest {
    LoginPage loginPage = new LoginPage(driver);

    //TC01: Email and password is blank
    @BeforeClass
    public void init() {
        driver.get(BASE_URL);
        helperAction = new HelperAction(driver);
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
        loginPage.clear();
        loginPage.login("ha@gmail.com", "123456");
        Thread.sleep(2000);
        helperAction.equals(loginPage.modalAlertElem(), "Email or password is invalid.");
    }

    //TC03:  Input password is NOT already on DB
    @Test
    public void TC03_Password_NotAlreadyOnDB() throws InterruptedException {
        loginPage.clear();
        loginPage.login("hanglee305+persona5@gmail.com", "18272");
        Thread.sleep(3000);
//        WebDriverWait wait = new WebDriverWait(driver, 10L);
//        wait.until(ExpectedConditions.visibilityOfElementLocated((By) loginPage.modalAlertSel));
        helperAction.equals(loginPage.modalAlertElem(), "Email or password is invalid.");
    }

    //TC04: Login with invalid format of email
    @Test
    public void TC04_Email_InvalidFormat() throws InterruptedException {
        loginPage.clear();
        loginPage.login("ha@gmail", "1234");
        Thread.sleep(3000);
        helperAction.equals(loginPage.emailErrorElem(), "Invalid email format");
    }

    //TC05: Login with invalid length of password
    @Test
    public void TC05_Password_InvalidLength() throws InterruptedException {
        loginPage.clear();
        loginPage.login("ha@gmail.com", "12");
        Thread.sleep(3000);
        helperAction.equals(loginPage.passwordErrorElem(), "Minimum 5 characters");
    }

    //TC06: Login with valid data
    @Test
    public void TC06_Success() throws InterruptedException {
        loginPage.clear();
        loginPage.login("hanglee305+persona5@gmail.com", "123456");
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

//    @DataProvider()
//    public Login[] userData(){
//        String jsonFileLocation = "/src/test/resources/test-data/Json/login.json";
//        return DataObjectBuilder.buildDataObjectFrom(jsonFileLocation, Login[].class);
//    }
//
//    @Test(dataProvider = "userData")
//    public void testUserDataCollection(Login userData) {
//        Assert.assertTrue(userData.getEmail().startsWith("T"), "[ERR] name is not started with T");
//        Assert.assertTrue(userData.getPassword().length() <=2 , "[ERR] Password ");
//    }
    @AfterClass
    public void tearDown(){
        this.driver.quit();
    }
}
