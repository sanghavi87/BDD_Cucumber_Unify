package StepDefinitions;


import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class Login
{
    WebDriver driver;
    @Given("^User able to open Browser$")
    public void user_able_to_open_Browser()
    {
        WebDriverManager.chromedriver().setup();
        driver =new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Given("^Enter an Url$")
    public void enter_an_Url()
    {
        driver.get("https://demo.nopcommerce.com/");
    }

    @When("^User click on Login Link$")
    public void user_click_on_Login_Link()
    {
        driver.findElement(By.className("ico-login")).click();
    }

    @When("^User on Login Page and Verify Login page Title$")
    public void user_on_Login_Page_and_Verify_Login_page_Title()
    {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("nopCommerce demo store. Login",title);
    }
//Simple Hard coded Step.
    @Then("^User enter username and password and click on login button$")
    public void user_enter_username_and_password_and_click_on_login_button()
    {
        driver.findElement(By.id("Email")).sendKeys("abcd@gmail.com");
        driver.findElement(By.id("Password")).sendKeys("Test123");
        driver.findElement(By.className("login-button")).click();
    }

//Simple Data Driven without Example keyword
    @Then("^User enter \"([^\"]*)\" and \"([^\"]*)\" and click on login button$")
    public void user_enter_and_click_on_login_button(String username, String password)
    {
        driver.findElement(By.id("Email")).sendKeys(username);
        driver.findElement(By.id("Password")).sendKeys(password);
        driver.findElement(By.className("login-button")).click();

    }
// Data Driven with Example keyword
    @Then("^User enter \"([^\"]*)\" and \"([^\"]*)\" and Click on login button$")
    public void user_enter_and_and_Click_on_login_button(String Username, String Password)
    {
        driver.findElement(By.id("Email")).sendKeys(Username);
        driver.findElement(By.id("Password")).sendKeys(Password);
        driver.findElement(By.className("login-button")).click();
    }
// Data Table
    @Then("^User enter USERNAME and PASSWORD and click on login button$")
    public void user_enter_USERNAME_and_PASSWORD_and_click_on_login_button(DataTable credentials)
    {
//        List<List<E>>

        List<List<String>> data = credentials.raw();
        driver.findElement(By.id("Email")).sendKeys(data.get(0).get(0));
        driver.findElement(By.id("Password")).sendKeys(data.get(0).get(1));
        driver.findElement(By.className("login-button")).click();

    }

    @Then("^User is on Home Page and Verify Home page Title$")
    public void user_is_on_Home_Page_and_Verify_Home_page_Title()
    {

    }

    @Then("^User close the browser$")
    public void user_close_the_browser()
    {
        driver.close();
    }
}
