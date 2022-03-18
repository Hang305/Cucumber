package Pages;

import Common.HelperAction;
import Common.Urls;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class SignUpPage extends BasePage implements Urls {
    private final WebDriver driver;
    HelperAction helperAction;

    @FindBy(tagName = "h2")
    public WebElement titleSel;

    @FindBy (css = ".card-signup input[value='ROLE_DEV']")
    public WebElement personaCheckboxSel;

    @FindBy (css = ".card-signup input[value='ROLE_PO']")
    public WebElement creatorCheckboxSel;

    @FindBy (name = "firstname")
    public WebElement firstNameSel;

    @FindBy (name = "lastname")
    public WebElement lastNameSel;

    @FindBy (name = "email")
    public WebElement emailSel;

    @FindBy (name = "password")
    public WebElement passwordSel;

    @FindBy (name = "confirmPassword")
    public WebElement confirmPasswordSel;

    @FindBy (css = ".form-group button[type='submit']")
    public WebElement signUpBtnSel;

    @FindBy (css = ".text-muted-2 a")
    public WebElement loginLinkSel;

    @FindBy (css = "text-muted-1")
    public WebElement privacyContentSel;

    @FindBy(css = "input[name='firstname']+.errors")
    public WebElement firstNameErrorSel;

    @FindBy(css = "input[name='lastname']+.errors")
    public WebElement lastNameErrorSel;

    @FindBy(css = "input[name='email']+.errors")
    public WebElement emailErrorSel;

    @FindBy(css = ".label-form+.input-group+.errors")
    public WebElement passwordErrorSel;

    @FindBy(css = ".label-comfirm+.input-group+.errors")
    public WebElement confirmPasswordErrorSel;

    @FindBy(css = "div[role='alert']")
    public WebElement modalAlertSel;

    public SignUpPage(WebDriver driver) {
        super(driver);
        this.driver = driver;
        PageFactory.initElements(driver, this);
        helperAction = new HelperAction(driver);
    }
    public void signup(String firstName, String lastName, String email, String password, String confirmPassword){
        helperAction.getValue(firstNameSel,firstName);
        helperAction.getValue(lastNameSel,lastName);
        helperAction.getValue(emailSel,email);
        helperAction.getValue(passwordSel,password);
        helperAction.getValue(confirmPasswordSel,confirmPassword);
        clickOnSignUpBtn();
    }
    public void signUpPage(String firstName, String lastName, String email, String password, String confirmPassword){
        helperAction.getValue(firstNameSel,firstName);
        helperAction.getValue(lastNameSel,lastName);
        helperAction.getValue(emailSel,email);
        helperAction.getValue(passwordSel,password);
        helperAction.getValue(confirmPasswordSel,confirmPassword);
    }
    public void clickOnSignUpBtn() {
        helperAction.clickOnBtn(signUpBtnSel);
    }
    public void clickOnLoginLink() {
        helperAction.clickOnBtn(loginLinkSel);
    }
    public String titleElem() {
        return helperAction.getText(titleSel);
    }
    public String firstNameErrorELem() {
        return helperAction.getText(firstNameErrorSel);
    }
    public String lastnameErrorELem() {
        return helperAction.getText(lastNameErrorSel);
    }
    public String emailErrorElem() {
        return helperAction.getText(emailErrorSel);
    }
    public String passwordErrorElem() {
        return helperAction.getText(passwordErrorSel);
    }
    public String confirmPasswordErrorELem() {
        return helperAction.getText(confirmPasswordErrorSel);
    }
    public String modalAlertElem() {
        return helperAction.getText(modalAlertSel);
    }
    public boolean personaCheckElem() {
        return personaCheckboxSel.isSelected();
    }
    public boolean creatorCheckElem() {
        return creatorCheckboxSel.isSelected();
    }
    public void clear() {
        helperAction.clear(firstNameSel);
        helperAction.clear(lastNameSel);
        helperAction.clear(emailSel);
        helperAction.clear(passwordSel);
        helperAction.clear(confirmPasswordSel);
    }
    public int randomNumber() {
        Random random = new Random();
        int randomNumber = random.nextInt();
        return randomNumber;
    }
}
