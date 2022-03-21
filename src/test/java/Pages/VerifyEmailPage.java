package Pages;

import Common.HelperAction;
import Common.Urls;
import com.mailslurp.client.ApiClient;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class VerifyEmailPage extends BasePage implements Urls {
    WebDriver driver;
    HelperAction helperAction;
    LoginPage loginPage;

    public VerifyEmailPage(WebDriver driver) {
        super(driver);
        this.driver = driver;
        helperAction = new HelperAction(driver);
        loginPage = new LoginPage(driver);
    }

    @FindBy(css = "input[placeholder='anything']")
    public WebElement enterEmailSel;
    @FindBy(css = "button[class='btn btn-primary']")
    public WebElement btnSubmit;
    @FindBy(css = "td[class='col-xs-5 ng-binding']")
    public WebElement newEmail;
    @FindBy(css = "div[class='ng-binding ng-scope']")
    public WebElement strEmail;
    @FindBy(className = "verify-email-form-input-textbox")
    public WebElement enterCodeSel;
    @FindBy(className = "verify-email-form-btn")
    public WebElement submitBtnSel;
    @FindBy(className = "verify-email-form-content-email")
    public WebElement contentAddressEmail;
    @FindBy(css = "verify-email-form-content p")
    public WebElement contentVerifyEmail;
    @FindBy(className = "verify-email-form-resend-btn")
    public WebElement resendEmailBtnSel;
    @FindBy(tagName = "h2")
    public WebElement titleSel;

    public void enterEmailName(String emailName) {
        enterEmailSel.sendKeys(emailName);
        btnSubmit.click();
    }

    public void openMail() {
        newEmail.click();
    }

    public String getCode() {
        String contentMail = helperAction.getText(strEmail);
        String confirmationCode;
        Pattern data = Pattern.compile("[0-9]{6}");
        Matcher matcher = data.matcher(contentMail);
        matcher.find();
        // Set value with 6 numbers (confirmation code) to confirmationCode variable
        confirmationCode = contentMail.substring(matcher.start(), matcher.end());
        return confirmationCode;
    }

    public void enterCode(String code, String email, String password) throws InterruptedException {
        helperAction.getValue(enterCodeSel, code);
        helperAction.clickOnBtn(submitBtnSel);
        Thread.sleep(2000);
        loginPage.login(email, password);
//        BasePage basePage = new BasePage(driver);
//        basePage.logout();
        logout();
        loginPage.clickOnSignUpLink();
    }

    public void openMailSacCom(String email, String password) throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        //chuyến driver đến window con
        //blank: URL được tải vào cửa số mới
        js.executeScript("window.open('http://mailsac.com','_blank');");
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));
        Thread.sleep(3000);
        enterEmailName(email);

        Thread.sleep(4000);
        driver.navigate().refresh();
        openMail();
        Thread.sleep(2000);
        String strCode = getCode();
        // Switch to old tab to enter the code
        driver.close();
        driver.switchTo().window(tabs.get(0));

        Thread.sleep(2000);
        enterCode(strCode, email+"@mailsac.com", password);
        Thread.sleep(2000);
    }

}
