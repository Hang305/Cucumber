package Test;

import Common.HelperAction;
import Common.Urls;
import Drivers.DriverFactory;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeTest;

import java.util.concurrent.TimeUnit;

public class BaseTest implements Urls {
    protected static WebDriver driver = DriverFactory.getChromeDriver();
    HelperAction helperAction;
    public WebDriver getDriver() {
        return driver;
    }
    
    @BeforeTest()
    public void init(){
        driver.manage().timeouts().implicitlyWait(20L, TimeUnit.SECONDS);
        helperAction = new HelperAction(driver);
    }

    @BeforeTest
    public void tearDown() {
        driver.quit();
    }
}
