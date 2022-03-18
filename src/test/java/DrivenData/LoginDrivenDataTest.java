package DrivenData;

import Common.DataObjectBuilder;
import Common.HelperAction;
import Models.Login;
import Pages.LoginPage;
import Test.BaseTest;
import com.google.gson.Gson;
import org.junit.runner.RunWith;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

//@UseTestDataFrom("test-data/CSV/login.csv")
//@RunWith(SerenityParameterizedRunner.class)
public class LoginDrivenDataTest extends BaseTest {
    HelperAction helperAction = new HelperAction(driver);
    LoginPage loginPage = new LoginPage(driver);
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }


    @Test(dataProvider = "userData")
    public void testUserDataCollection(Login userData) {
//        helperAction.equals(userData.getEmail(),loginPage.emailErrorElem());
//        helperAction.equals(userData.getPassword(),loginPage.passwordErrorElem());
    }

    private static void testFromObjectToJson() {
        Login user = new Login("ha@gmail.com", "123455");
        Gson gson = new Gson();
        System.out.println(gson.toJson(user));
    }

    private static void testFromJsonToObject() {
        String jsonFileLocation = "/src/test/resources/test-data/Json/login.json";
        Login[] users = DataObjectBuilder.buildDataObjectFrom(jsonFileLocation, Login[].class);

        for (Login user : users) {
            System.out.println(user);
        }
    }

}
