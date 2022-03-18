package Test;

import Common.HelperAction;
import Pages.SignUpPage;
import Pages.VerifyEmailPage;
import org.openqa.selenium.JavascriptExecutor;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class SignUpTest extends BaseTest{
    SignUpPage signUpPage = new SignUpPage(driver);
    String email;

    // TC01: title is displayed correctly
    @BeforeClass
    public void init() {
        driver.get(BASE_URL.concat(SIGNUP));
        helperAction = new HelperAction(driver);
    }
    @Test
    public void TC01_TitleIsDisplayedCorrectly() {
        helperAction.equals(signUpPage.titleElem(),"Sign Up");
    }

    //TC02: Internal persona is checked
    @Test
    public void TC02_PersonaIsChecked() {
        helperAction.equals(signUpPage.personaCheckElem(), true);
    }

    // TC03: all elements are blank
    @Test
    public void TC03_Blank() throws InterruptedException {
        signUpPage.signup("","","","","");
        List<String> expectedMessageTest = Arrays.asList("Required!", "Required!", "Required!", "Required!", "Required!");
        List<String> actualMessageTest = Arrays.asList(signUpPage.firstNameErrorELem(),signUpPage.lastnameErrorELem(),signUpPage.emailErrorElem(),signUpPage.passwordErrorElem(),signUpPage.confirmPasswordErrorELem() );
        helperAction.equals(actualMessageTest,expectedMessageTest);
    }

    // TC04: FirstName is invalid data with number
    @Test
    public void TC04_FirstName_InvalidData() {
        signUpPage.clear();
        signUpPage.signup("34","","","","");
        helperAction.equals(signUpPage.firstNameErrorELem(),"Please enter valid name");
    }

    // TC05: lastname is invalid data with number
    @Test
    public void TC05_LastName_InvalidData() {
        signUpPage.clear();
        signUpPage.signup("","34","","","");
        helperAction.equals(signUpPage.lastnameErrorELem(),"Please enter valid name");
    }

    // TC06: email is invalid with number
    @Test
    public void TC06_Email_InvalidData() {
        signUpPage.clear();
        signUpPage.signup("","","3872","","");
        helperAction.equals(signUpPage.emailErrorElem(),"Invalid email format");
    }
    // TC07: email is invalid with number
    @Test
    public void TC07_Password_InvalidData() {
        signUpPage.clear();
        signUpPage.signup("","","","ha12","");
        helperAction.equals(signUpPage.passwordErrorElem(),"At least one uppercase, one number and one special case character");
    }
    // TC08: confirm password is not match password
    @Test
    public void TC08_ConfirmPassword_NotMatch() {
        signUpPage.clear();
        signUpPage.signup("","","","","23");
        helperAction.equals(signUpPage.confirmPasswordErrorELem(),"Password doesn’t match");

    }
    // TC09: sign up successfully
    @Test
    public void TC09_SignUpSuccess() throws InterruptedException {
        signUpPage.clear();
        email = "hang.le" + randomNumber();
        signUpPage.signup("Hang","test",email+ "@mailsac.com","Ha123@","Ha123@");
        Thread.sleep(10000);
        helperAction.equals(driver.getCurrentUrl(),BASE_URL.concat(VERIFY_EMAIL));


        JavascriptExecutor js = (JavascriptExecutor) driver;
        //chuyến driver đến window con
        //blank: URL được tải vào cửa số mới
        js.executeScript("window.open('http://mailsac.com','_blank');");
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));

        VerifyEmailPage verifyEmailPage = new VerifyEmailPage(driver);
        System.out.println(this.driver.getCurrentUrl());
        System.out.println(email);
        verifyEmailPage.enterEmailName(email);

        Thread.sleep(4000);
        driver.navigate().refresh();
        verifyEmailPage.openMail();
        Thread.sleep(2000);
        String strCode = verifyEmailPage.getCode();

        // Switch to old tab to enter the code
        driver.switchTo().window(tabs.get(0));
        verifyEmailPage.enterCode(strCode);
    }
    public int randomNumber() {
        Random random = new Random();
        int randomNumber = random.nextInt();
        return randomNumber;
    }
}
