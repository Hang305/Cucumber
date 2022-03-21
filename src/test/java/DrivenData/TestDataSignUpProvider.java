package DrivenData;

import Common.HelperAction;
import Common.Urls;
import Models.SignUp;
import Pages.SignUpPage;
import Pages.VerifyEmailPage;
import Test.BaseTest;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.util.ArrayList;

public class TestDataSignUpProvider extends BaseTest implements Urls {
    private WebDriver driver;
    SignUpPage signUpPage;
    HelperAction helperAction;
    VerifyEmailPage verifyEmail;
    String excelFileName = "TestDataSignUp.xlsx";
    File excelFileLocation = new File(System.getProperty("user.dir") + "/src/test/resources/test-data/" + excelFileName);
    int startRowIndex = 1, startColIndex = 0, totalRow, totalCol;

    public TestDataSignUpProvider(WebDriver driver) {
        this.driver = driver;
        this.driver.get(BASE_URL.concat(SIGNUP));
        signUpPage = new SignUpPage(driver);
        helperAction = new HelperAction(driver);
        verifyEmail = new VerifyEmailPage(driver);
    }

    //Read a file excel for first name field with invalid data
    public void FirstNameInvalidDataTest(String msg) {
        String sheetName = "firstName_Invalid";
        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] firstNameData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            helperAction.refreshPage();
            firstNameData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            firstNameData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);
            firstNameData[startRow - startRowIndex][startColIndex + 2] = excelReaderUtils.getCellValue(startRow, startColIndex + 2);
            firstNameData[startRow - startRowIndex][startColIndex + 3] = excelReaderUtils.getCellValue(startRow, startColIndex + 3);
            firstNameData[startRow - startRowIndex][startColIndex + 4] = excelReaderUtils.getCellValue(startRow, startColIndex + 4);

            SignUp signUp = new SignUp(firstNameData[startRow - startRowIndex][startColIndex].toString(),
                    firstNameData[startRow - startRowIndex][startColIndex + 1].toString(),
                    firstNameData[startRow - startRowIndex][startColIndex + 2].toString(),
                    firstNameData[startRow - startRowIndex][startColIndex + 3].toString(),
                    firstNameData[startRow - startRowIndex][startColIndex + 4].toString());
            signUpPage.signup(signUp.getFirstName(), signUp.getLastName(), signUp.getEmail(), signUp.getPassword(), signUp.getConfirmPassword());
            helperAction.equals(signUpPage.firstNameErrorELem(), msg);
            signUpPage.clear();
        }
    }

    //Read a file excel for last name field with invalid data
    public void LastNameInvalidDataTest(String msg) {
        String sheetName = "lastName_Invalid";
        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] lastNameData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            helperAction.refreshPage();
            lastNameData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            lastNameData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);
            lastNameData[startRow - startRowIndex][startColIndex + 2] = excelReaderUtils.getCellValue(startRow, startColIndex + 2);
            lastNameData[startRow - startRowIndex][startColIndex + 3] = excelReaderUtils.getCellValue(startRow, startColIndex + 3);
            lastNameData[startRow - startRowIndex][startColIndex + 4] = excelReaderUtils.getCellValue(startRow, startColIndex + 4);

            SignUp signUp = new SignUp(lastNameData[startRow - startRowIndex][startColIndex].toString(),
                    lastNameData[startRow - startRowIndex][startColIndex + 1].toString(),
                    lastNameData[startRow - startRowIndex][startColIndex + 2].toString(),
                    lastNameData[startRow - startRowIndex][startColIndex + 3].toString(),
                    lastNameData[startRow - startRowIndex][startColIndex + 4].toString());
            signUpPage.signup(signUp.getFirstName(), signUp.getLastName(), signUp.getEmail(), signUp.getPassword(), signUp.getConfirmPassword());
            helperAction.equals(signUpPage.lastnameErrorELem(), msg);
            signUpPage.clear();
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
            helperAction.refreshPage();
            emailData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            emailData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);
            emailData[startRow - startRowIndex][startColIndex + 2] = excelReaderUtils.getCellValue(startRow, startColIndex + 2);
            emailData[startRow - startRowIndex][startColIndex + 3] = excelReaderUtils.getCellValue(startRow, startColIndex + 3);
            emailData[startRow - startRowIndex][startColIndex + 4] = excelReaderUtils.getCellValue(startRow, startColIndex + 4);

            SignUp signUp = new SignUp(emailData[startRow - startRowIndex][startColIndex].toString(),
                    emailData[startRow - startRowIndex][startColIndex + 1].toString(),
                    emailData[startRow - startRowIndex][startColIndex + 2].toString(),
                    emailData[startRow - startRowIndex][startColIndex + 3].toString(),
                    emailData[startRow - startRowIndex][startColIndex + 4].toString());
            signUpPage.signup(signUp.getFirstName(), signUp.getLastName(), signUp.getEmail(), signUp.getPassword(), signUp.getConfirmPassword());
            helperAction.equals(signUpPage.emailErrorElem(), msg);
            signUp.setEmail("");
            signUpPage.clear();
        }
    }

    //Read a file excel for password field with invalid data
    public void PasswordInvalidDataTest(String msg) {
        String sheetName = "password_invalid";

        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] passwordData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            helperAction.refreshPage();
            passwordData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            passwordData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);
            passwordData[startRow - startRowIndex][startColIndex + 2] = excelReaderUtils.getCellValue(startRow, startColIndex + 2);
            passwordData[startRow - startRowIndex][startColIndex + 3] = excelReaderUtils.getCellValue(startRow, startColIndex + 3);
            passwordData[startRow - startRowIndex][startColIndex + 4] = excelReaderUtils.getCellValue(startRow, startColIndex + 4);

            SignUp signUp = new SignUp(passwordData[startRow - startRowIndex][startColIndex].toString(),
                    passwordData[startRow - startRowIndex][startColIndex + 1].toString(),
                    passwordData[startRow - startRowIndex][startColIndex + 2].toString(),
                    passwordData[startRow - startRowIndex][startColIndex + 3].toString(),
                    passwordData[startRow - startRowIndex][startColIndex + 4].toString());
            signUpPage.signup(signUp.getFirstName(), signUp.getLastName(), signUp.getEmail(), signUp.getPassword(), signUp.getConfirmPassword());
            helperAction.equals(signUpPage.passwordErrorElem(), msg);
            signUpPage.clear();
        }

    }

    //Read a file excel for confirm password field with invalid data
    public void ConfirmPasswordInvalidDataTest(String msg) {
        String sheetName = "confirmPassword_Invalid";
        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] confirmPasswordData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            helperAction.refreshPage();
            confirmPasswordData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            confirmPasswordData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);
            confirmPasswordData[startRow - startRowIndex][startColIndex + 2] = excelReaderUtils.getCellValue(startRow, startColIndex + 2);
            confirmPasswordData[startRow - startRowIndex][startColIndex + 3] = excelReaderUtils.getCellValue(startRow, startColIndex + 3);
            confirmPasswordData[startRow - startRowIndex][startColIndex + 4] = excelReaderUtils.getCellValue(startRow, startColIndex + 4);

            SignUp signUp = new SignUp(confirmPasswordData[startRow - startRowIndex][startColIndex].toString(),
                    confirmPasswordData[startRow - startRowIndex][startColIndex + 1].toString(),
                    confirmPasswordData[startRow - startRowIndex][startColIndex + 2].toString(),
                    confirmPasswordData[startRow - startRowIndex][startColIndex + 3].toString(),
                    confirmPasswordData[startRow - startRowIndex][startColIndex + 4].toString());
            signUpPage.signup(signUp.getFirstName(), signUp.getLastName(), signUp.getEmail(), signUp.getPassword(), signUp.getConfirmPassword());
            helperAction.equals(signUpPage.confirmPasswordErrorELem(), msg);
            signUpPage.clear();
        }

    }

    public void SignUpTestDataValidData() throws InterruptedException {
        String sheetName = "Data";
        ExcelReaderUtils excelReaderUtils = new ExcelReaderUtils(excelFileLocation, sheetName, startRowIndex, startRowIndex);
        totalRow = excelReaderUtils.getTotalRow();
        totalCol = excelReaderUtils.getTotalColumn();

        Object[][] signUpData = new Object[totalRow - startRowIndex][totalCol - startColIndex];
        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
            signUpData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
            signUpData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);
            signUpData[startRow - startRowIndex][startColIndex + 2] = excelReaderUtils.getCellValue(startRow, startColIndex + 2);
            signUpData[startRow - startRowIndex][startColIndex + 3] = excelReaderUtils.getCellValue(startRow, startColIndex + 3);
            signUpData[startRow - startRowIndex][startColIndex + 4] = excelReaderUtils.getCellValue(startRow, startColIndex + 4);

            SignUp signUp = new SignUp(signUpData[startRow - startRowIndex][startColIndex].toString(),
                    signUpData[startRow - startRowIndex][startColIndex + 1].toString(),
                    signUpData[startRow - startRowIndex][startColIndex + 2].toString(),
                    signUpData[startRow - startRowIndex][startColIndex + 3].toString(),
                    signUpData[startRow - startRowIndex][startColIndex + 4].toString());
            signUpPage.signup(signUp.getFirstName(), signUp.getLastName(), signUp.getEmail(), signUp.getPassword(), signUp.getConfirmPassword());
            Thread.sleep(15000);
            helperAction.equals(driver.getCurrentUrl(),BASE_URL.concat(VERIFY_EMAIL));

            String domainMail = signUp.domainMail(signUp.getEmail());
            verifyEmail.openMailSacCom(domainMail,signUp.getPassword() );
        }
    }


    public void ReadFileExcel(ExcelReaderUtils excelReaderUtils, Object[][] listData, String actualResult, String msg) {
//
//        System.out.println(actualResult);
//        for (int startRow = startRowIndex; startRow < totalRow; startRow++) {
//            helperAction.refreshPage();
//            listData[startRow - startRowIndex][startColIndex] = excelReaderUtils.getCellValue(startRow, startColIndex);
//            listData[startRow - startRowIndex][startColIndex + 1] = excelReaderUtils.getCellValue(startRow, startColIndex + 1);
//            listData[startRow - startRowIndex][startColIndex + 2] = excelReaderUtils.getCellValue(startRow, startColIndex + 2);
//            listData[startRow - startRowIndex][startColIndex + 3] = excelReaderUtils.getCellValue(startRow, startColIndex + 3);
//            listData[startRow - startRowIndex][startColIndex + 4] = excelReaderUtils.getCellValue(startRow, startColIndex + 4);
//
//            SignUp signUp = new SignUp(listData[startRow - startRowIndex][startColIndex].toString(),
//                    listData[startRow - startRowIndex][startColIndex + 1].toString(),
//                    listData[startRow - startRowIndex][startColIndex + 2].toString(),
//                    listData[startRow - startRowIndex][startColIndex + 3].toString(),
//                    listData[startRow - startRowIndex][startColIndex + 4].toString());
//            signUpPage.signup(signUp.getFirstName(), signUp.getLastName(), signUp.getEmail(), signUp.getPassword(), signUp.getConfirmPassword());
//            helperAction.equals(actualResult, msg);
//            signUpPage.clear();
//        }
    }
}
