package Common;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class HelperAction {
    private WebDriver driver;

    public HelperAction(WebDriver driver) {
        this.driver = driver;
    }

    public WebElement getElemBy(By inputElem) {
        return this.driver.findElement(inputElem);
    }

    public void setText(By element, String input) {
        driver.findElement(element).sendKeys(input);
    }

    public void clickOnBtn(WebElement element) {
        element.click();
    }

    public void getValue(WebElement element, String input) {
        element.sendKeys(input);
    }

    public String getText(WebElement element) {
       return element.getText();
    }

    public void equals(String actualTest, String expectedTest, String msg) {
        Assert.assertEquals(actualTest, expectedTest, msg);
    }

    public void refreshPage() {
        this.driver.navigate().refresh();
    }

    public void openNewTab(WebDriver driver, String webUrl) {
        ((JavascriptExecutor) driver).executeScript("window.open()");
    }

    public void equals(Object actualTest, Object expectedTest) {
        Assert.assertEquals(actualTest, expectedTest);
    }
    public void clear(List<WebElement> objects){
        for (WebElement item: objects){
            item.clear();
        }
    }
    public void clear(WebElement element){
        element.clear();
    }
}
