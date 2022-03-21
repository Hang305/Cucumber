package Pages;

import Common.HelperAction;
import Common.Urls;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage implements Urls {
    private final WebDriver driver;
    HelperAction helperAction;
    ExplorePage explorePage;

    @FindBy(tagName = "h2")
    public WebElement titleSel;

    @FindBy(css = ".login-wrapper p")
    public WebElement descriptionSel;

    @FindBy(name = "email")
    public WebElement emailSel;

    @FindBy(name = "password")
    public WebElement passwordSel;

    @FindBy(css = "#password[type='text']")
    public WebElement showTextPasswordSel;

    @FindBy(css = ".login-form-submit button[type='submit']")
    public WebElement loginBtnSel;

    @FindBy(css = ".form-group p[class='errors']")
    public WebElement emailErrorSel;

    @FindBy(css = ".form-group+.login-form-group p[class='errors']")
    public WebElement passwordErrorSel;

    @FindBy(css = "div[role='alert']")
    public WebElement modalAlertSel;

    @FindBy(css = ".login-form-group-remember span[class='remeber-mark']")
    public WebElement rememberSel;

    @FindBy(css = ".login-form-forgot a")
    public WebElement forgetPasswordSel;

    @FindBy(css = ".directional-signup a")
    public WebElement signupLinkSel;

    @FindBy(className = "show-password")
    public WebElement showPasswordEyeSel;


    public LoginPage(WebDriver driver) {
        super(driver);
        this.driver = driver;
        this.driver.get(BASE_URL);
        PageFactory.initElements(driver, this);
        helperAction = new HelperAction(driver);
        explorePage = new ExplorePage(driver);
    }

    public void login(String email, String password) {
        helperAction.getValue(emailSel, email);
        helperAction.getValue(passwordSel, password);
        clickOnLoginBtn();
    }

    public void loginPage(String email, String password) {
        helperAction.getValue(emailSel, email);
        helperAction.getValue(passwordSel, password);
    }

    public void clickOnLoginBtn() {
        loginBtnSel.click();
    }

    public void clickOnSignUpLink() {
        signupLinkSel.click();
    }

    public String titleElem() {
        return titleSel.getText();
    }

    public String descriptionElem() {
        return descriptionSel.getText();
    }

    public String emailErrorElem() {
        return emailErrorSel.getText();
    }

    public String passwordErrorElem() {
        return passwordErrorSel.getText();
    }

    public String modalAlertElem() {
        return modalAlertSel.getText();
    }

    public boolean checkRememberElem() {
        return rememberSel.isSelected();
    }

    public boolean checkShowTextPassword(){
        return showTextPasswordSel.isDisplayed();
    }
    public void showPasswordEye(){
        showPasswordEyeSel.click();
    }

    public void clear() {
        helperAction.clear(emailSel);
        helperAction.clear(passwordSel);
    }

}
