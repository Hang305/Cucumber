package Test;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.junit.runner.RunWith;

//@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = {"src/test/resources/feature/Login.feature"},
        glue = {"Steps"},
        plugin = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "timeline:target/test-output-thread/"},
        monochrome = true)
public class TestRunner extends AbstractTestNGCucumberTests {

}
