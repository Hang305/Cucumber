package Serenity;

import Pages.LoginPage;


public class LoginSerenity  {
    private String email;
    private String password;
    LoginPage loginPage;

    public LoginSerenity(String email, String password) {
        super();
        loginPage.login(email, password);
        this.email = email;
        this.password = password;
    }

    public void clickOnLoginBtn() {
        loginPage.clickOnLoginBtn();
    }

    public void clickOnSignUpLink() {
        loginPage.clickOnSignUpBtn();
    }

    public String getTite() {
        return loginPage.titleElem();
    }

    public void rememberChecked() {
        loginPage.checkRememberElem();
    }

}
