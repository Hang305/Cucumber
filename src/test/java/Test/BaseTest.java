package Test;

import Common.HelperAction;
import Common.Urls;
import Drivers.DriverFactory;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import java.util.concurrent.TimeUnit;

public class BaseTest implements Urls {

    protected static WebDriver driver = DriverFactory.getChromeDriver();
    HelperAction helperAction;
    private void initDriver(){
        driver =  DriverFactory.getChromeDriver();
    }

    @BeforeTest(alwaysRun = true)
    public void beforeTest(){
        initDriver();
        driver.manage().timeouts().implicitlyWait(20L, TimeUnit.SECONDS);
        helperAction = new HelperAction(driver);
    }

    @AfterTest(alwaysRun = true)
    public void afterTest(){
        driver.quit();
    }

//    @BeforeTest
//    public void init() {
//        driver.get(BASE_URL);
//
//    }

//    @AfterTest
//    public void tearDown() {
//        driver.quit();
//    }

}
