package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;


public class BasePage {
    protected WebDriverWait waiter = null;
    protected WebDriver driver;

    public BasePage(WebDriver driver) {
        this.driver = driver;
        this.waiter = new WebDriverWait(driver, 60);
        PageFactory.initElements(driver, this);
    }
}
