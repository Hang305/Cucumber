package DrivenData;

import Common.HelperAction;
import Common.Urls;
import Models.Login;
import Pages.ExplorePage;
import Pages.LoginPage;
import Test.BaseTest;
import org.openqa.selenium.WebDriver;

import java.io.File;

public class TestDataLoginProvider extends BaseTest implements Urls {
    private WebDriver driver;
    LoginPage loginPage;
    HelperAction helperAction;
    ExplorePage explorePage;
    String excelFileName = "TestData.xlsx", expectedResult = "";
    File excelFileLocation = new File(System.getProperty("user.dir") + "/src/test/resources/test-data/" + excelFileName);
    int startRowIndex = 1, startColIndex = 0, totalRow, totalCol;

    public TestDataLoginProvider(WebDriver driver) {
        this.driver = driver;
        this.driver.get(BASE_URL);
        loginPage = new LoginPage(driver);
        helperAction = new HelperAction(driver);
        explorePage = new ExplorePage(driver);
    }

    //Read a file excel for all data to login success
    public void LoginTestDataValidData() throws InterruptedException {
        String sheetName = "Data";
        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] loginData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            loginData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            loginData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);
            loginData[startRow - startRowIndex][startColIndex + 2] = excelReaderUtils.getCellValue(startRow, startColIndex + 2);
            String role = loginData[startRow - startRowIndex][startColIndex + 2].toString();
            switch (role) {
                case "persona":
                    expectedResult = BASE_URL.concat(EXPLORE_PAGES);
                    break;
                case "project creator":
                    expectedResult = BASE_URL.concat(MANAGE_PROJECTS);
                    break;
            }
            Login login = new Login(loginData[startRow - startRowIndex][startColIndex].toString(), loginData[startRow - startRowIndex][startColIndex + 1].toString());
            loginPage.login(login.getEmail(), login.getPassword());
            Thread.sleep(2000);
            helperAction.equals(driver.getCurrentUrl(), expectedResult);
            explorePage.logout();
        }
    }
    //Read a file excel for email field with invalid data
    public void EmailInvalidDataTest(String msg) {
        String sheetName = "email_Invalid";
        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] emailData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            emailData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            emailData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);

            Login login = new Login(emailData[startRow - startRowIndex][startColIndex].toString(), emailData[startRow - startRowIndex][startColIndex + 1].toString());
            loginPage.login(login.getEmail(), login.getPassword());
            helperAction.equals(loginPage.emailErrorElem(), msg);
            loginPage.clear();
        }
    }
    //Read a file excel for password field with invalid data
    public void PasswordInvalidLengthDataTest(String msg) {
        String sheetName = "password_invalid";
        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] passwordData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            helperAction.refreshPage();
            passwordData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            passwordData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);

            Login login = new Login(passwordData[startRow - startRowIndex][startColIndex].toString(), passwordData[startRow - startRowIndex][startColIndex + 1].toString());
            loginPage.login(login.getEmail(), login.getPassword());
            helperAction.equals(loginPage.passwordErrorElem(), msg);
//            loginPage.clear();
        }
    }
    //Read a file excel for input data not already on DB
    public void DataNotAlreadyOnDBTest(String msg) throws InterruptedException {
        String sheetName = "NotAlreadyOnDB";
        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] notAnotAlreadyOnDBData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            helperAction.refreshPage();
            helperAction.refreshPage();
            notAnotAlreadyOnDBData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            notAnotAlreadyOnDBData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);

            Login login = new Login(notAnotAlreadyOnDBData[startRow - startRowIndex][startColIndex].toString(), notAnotAlreadyOnDBData[startRow - startRowIndex][startColIndex + 1].toString());
            loginPage.login(login.getEmail(), login.getPassword());
            Thread.sleep(3000);
            helperAction.equals(loginPage.modalAlertElem(), msg);

        }
    }
}
