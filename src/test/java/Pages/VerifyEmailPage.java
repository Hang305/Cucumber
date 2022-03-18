package Pages;

import Common.HelperAction;
import Common.Urls;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class VerifyEmailPage extends BasePage implements Urls {
    WebDriver driver;
    HelperAction helperAction;

    public VerifyEmailPage(WebDriver driver) {
        super(driver);
        this.driver = driver;
        helperAction = new HelperAction(driver);
    }
    @FindBy(css = "input[placeholder='anything']")
    public WebElement enterEmailSel;
    @FindBy(css = "button[class='btn btn-primary']")
    public WebElement btnSubmit;
    @FindBy(css = "td[class='col-xs-5 ng-binding']")
    public WebElement newEmail;
    @FindBy(css = "div[class='ng-binding ng-scope']")
    public WebElement strEmail;

//    @FindBy(id = "code")
//    public WebElement enterEmailSel;
//    @FindBy(id = "submit_code")
//    public WebElement btnSubmit;
//    @FindBy(className = "subject")
//    public WebElement newEmail;
//    @FindBy(css = "pre:nth-child(1)")
//    public WebElement strEmail;

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
//        helperAction.getValue(enterEmailSel, emailName);
//        helperAction.clickOnBtn(btnSubmit);
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

    public void enterCode(String code) {
        helperAction.getValue(enterCodeSel, code);
        helperAction.clickOnBtn(submitBtnSel);
    }

}
