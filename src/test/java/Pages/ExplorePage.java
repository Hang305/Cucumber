package Pages;

import Common.HelperAction;
import Common.Urls;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ExplorePage extends BasePage implements Urls {
    WebDriver driver;
    HelperAction helperAction;

    public ExplorePage(WebDriver driver) {
        super(driver);
        this.driver = driver;
        helperAction = new HelperAction(driver);
    }

    @FindBy(tagName = "h2")
    public WebElement titleSel;
    @FindBy(css = ".sidebar-footer i")
    public WebElement logoutSel;

    public void logout(){
        helperAction.clickOnBtn(logoutSel);
    }
}
