package Pages;

import Common.HelperAction;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;


public class BasePage {
    protected WebDriverWait waiter = null;
    protected WebDriver driver;
    HelperAction helperAction;

    public BasePage(WebDriver driver) {
        this.driver = driver;
        this.waiter = new WebDriverWait(driver, 60);
        helperAction = new HelperAction(driver);
        PageFactory.initElements(driver, this);
    }
    @FindBy(css = ".sidebar-footer i")
    public WebElement logoutSel;

    public void logout(){
        helperAction.clickOnBtn(logoutSel);
    }
}
