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

    public SignUp(String firstName, String lastName, String email, String password, String confirmPassword) {
        this.firstName = firstName;
        this.lastName = lastName;
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

    public void setEmail(String email) {
        this.email = email;
    }
    public String domainMail(String email){
        String[] domainOfMail = email.split("@");
        return domainOfMail[0];
    }
}
