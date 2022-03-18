package Models;

public class SignUp {
   private String lastName;
   private String firstName;
   private String email;
   private String password;
   private String confirmPassword;

    public SignUp(String email, String password) {
        this.email = email;
        this.password= password;
    }

    public SignUp(String lastName, String firstName, String email, String password, String confirmPassword) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }
}
